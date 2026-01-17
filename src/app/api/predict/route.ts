import { NextRequest, NextResponse } from "next/server";

const FLASK_API_URL = process.env.FLASK_API_URL || "http://localhost:5000";

const MODEL_MEAN = [3.845, 121.687, 72.405, 29.153, 155.548, 32.457, 0.472, 33.241];
const MODEL_STD = [3.370, 30.536, 12.096, 8.791, 85.021, 6.875, 0.331, 11.760];

const MODEL_COEFFICIENTS = [
  0.12, 0.35, 0.08, 0.05, 0.15, 0.25, 0.18, 0.10
];
const MODEL_INTERCEPT = -0.85;

function standardize(values: number[]): number[] {
  return values.map((val, idx) => (val - MODEL_MEAN[idx]) / MODEL_STD[idx]);
}

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function predictLocally(features: number[]): { prediction: number; probability: number } {
  const standardized = standardize(features);
  let logit = MODEL_INTERCEPT;
  for (let i = 0; i < standardized.length; i++) {
    logit += standardized[i] * MODEL_COEFFICIENTS[i];
  }
  const probability = sigmoid(logit);
  return {
    prediction: probability >= 0.5 ? 1 : 0,
    probability: probability,
  };
}

function getRiskLevel(probability: number): string {
  if (probability < 0.3) return "Low";
  if (probability < 0.5) return "Moderate";
  if (probability < 0.7) return "High";
  return "Very High";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const requiredFields = [
      "pregnancies",
      "glucose",
      "bloodPressure",
      "skinThickness",
      "insulin",
      "bmi",
      "diabetesPedigreeFunction",
      "age",
    ];

    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const features = [
      parseFloat(body.pregnancies),
      parseFloat(body.glucose),
      parseFloat(body.bloodPressure),
      parseFloat(body.skinThickness),
      parseFloat(body.insulin),
      parseFloat(body.bmi),
      parseFloat(body.diabetesPedigreeFunction),
      parseFloat(body.age),
    ];

    for (let i = 0; i < features.length; i++) {
      if (isNaN(features[i])) {
        return NextResponse.json(
          { error: `Invalid value for ${requiredFields[i]}` },
          { status: 400 }
        );
      }
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const flaskResponse = await fetch(`${FLASK_API_URL}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (flaskResponse.ok) {
        const data = await flaskResponse.json();
        return NextResponse.json(data);
      }
    } catch {
    }

    const { prediction, probability } = predictLocally(features);
    const riskLevel = getRiskLevel(probability);

    return NextResponse.json({
      prediction,
      result: prediction === 1 ? "Diabetic" : "Not Diabetic",
      probability: {
        not_diabetic: Math.round((1 - probability) * 10000) / 100,
        diabetic: Math.round(probability * 10000) / 100,
      },
      risk_level: riskLevel,
      source: "local_model",
    });
  } catch (error) {
    console.error("Prediction error:", error);
    return NextResponse.json(
      { error: "Prediction failed. Please try again." },
      { status: 500 }
    );
  }
}
