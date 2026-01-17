from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

model_dir = os.path.join(os.path.dirname(__file__), '..', 'model')
model_path = os.path.join(model_dir, 'diabetes_model.joblib')
scaler_path = os.path.join(model_dir, 'scaler.joblib')

model = None
scaler = None

def load_model():
    global model, scaler
    try:
        model = joblib.load(model_path)
        scaler = joblib.load(scaler_path)
        print("Model and scaler loaded successfully!")
        return True
    except FileNotFoundError:
        print("Error: Model files not found. Please run train_model.py first.")
        return False

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "model_loaded": model is not None
    })

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None or scaler is None:
        return jsonify({
            "error": "Model not loaded. Please train the model first."
        }), 500

    try:
        data = request.get_json()
        
        required_fields = [
            'pregnancies', 'glucose', 'bloodPressure', 'skinThickness',
            'insulin', 'bmi', 'diabetesPedigreeFunction', 'age'
        ]
        
        for field in required_fields:
            if field not in data:
                return jsonify({
                    "error": f"Missing required field: {field}"
                }), 400
        
        features = np.array([[
            float(data['pregnancies']),
            float(data['glucose']),
            float(data['bloodPressure']),
            float(data['skinThickness']),
            float(data['insulin']),
            float(data['bmi']),
            float(data['diabetesPedigreeFunction']),
            float(data['age'])
        ]])
        
        features_scaled = scaler.transform(features)
        
        prediction = model.predict(features_scaled)[0]
        probability = model.predict_proba(features_scaled)[0]
        
        result = {
            "prediction": int(prediction),
            "result": "Diabetic" if prediction == 1 else "Not Diabetic",
            "probability": {
                "not_diabetic": round(float(probability[0]) * 100, 2),
                "diabetic": round(float(probability[1]) * 100, 2)
            },
            "risk_level": get_risk_level(probability[1])
        }
        
        return jsonify(result)
    
    except ValueError as e:
        return jsonify({
            "error": f"Invalid input value: {str(e)}"
        }), 400
    except Exception as e:
        return jsonify({
            "error": f"Prediction failed: {str(e)}"
        }), 500

def get_risk_level(diabetic_probability):
    if diabetic_probability < 0.3:
        return "Low"
    elif diabetic_probability < 0.5:
        return "Moderate"
    elif diabetic_probability < 0.7:
        return "High"
    else:
        return "Very High"

if __name__ == '__main__':
    if load_model():
        print("\n" + "=" * 50)
        print("FLASK API SERVER")
        print("=" * 50)
        print("Server running at http://localhost:5000")
        print("Endpoints:")
        print("  - GET  /api/health  - Health check")
        print("  - POST /api/predict - Make prediction")
        print("=" * 50 + "\n")
        app.run(debug=True, port=5000, host='0.0.0.0')
    else:
        print("\nPlease run 'python train_model.py' first to train the model.")
