# Diabetes Risk Predictor

A full-stack web application that predicts diabetes risk using Machine Learning. Built with Next.js 15 frontend and Python Flask backend.

## Project Structure

```
diabetes-prediction/
├── src/                          # Next.js Frontend
│   ├── app/
│   │   ├── page.tsx              # Main prediction form UI
│   │   ├── globals.css           # Styling with animations
│   │   └── api/
│   │       └── predict/
│   │           └── route.ts      # API route (proxies to Flask or uses local model)
│   └── components/               # UI components
├── backend/                      # Python ML Backend
│   ├── train_model.py            # ML model training script
│   ├── app.py                    # Flask API server
│   └── requirements.txt          # Python dependencies
├── model/                        # Saved ML models (generated after training)
│   ├── diabetes_model.joblib     # Trained Random Forest model
│   └── scaler.joblib             # Feature scaler
└── README.md
```

## Features

- Beautiful animated UI with glass-morphism design
- Real-time diabetes risk prediction
- Probability scores and risk level assessment
- Floating particles, DNA helix, and heartbeat line animations
- Responsive design for all screen sizes
- Local fallback model when Flask backend is unavailable

## Quick Start (Frontend Only)

The frontend works immediately with a built-in local prediction model:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start predicting!

## Full Setup (With Python ML Backend)

### Step 1: Set Up Python Environment

```bash
# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
```

### Step 2: Train the ML Model

```bash
# Still in backend folder with venv activated
python train_model.py
```

This will:
- Download the PIMA Indians Diabetes Dataset
- Preprocess the data (handle missing values, scale features)
- Train a Random Forest Classifier
- Save the model to `model/diabetes_model.joblib`
- Save the scaler to `model/scaler.joblib`

Expected output:
```
==================================================
DIABETES PREDICTION MODEL TRAINING
==================================================
[1/6] Loading PIMA Indians Diabetes Dataset...
[2/6] Data Preprocessing...
[3/6] Splitting Data...
[4/6] Splitting into Train/Test Sets...
[5/6] Training Random Forest Classifier...
[6/6] Evaluating Model Performance...

   Accuracy: ~77-80%
==================================================
TRAINING COMPLETE!
==================================================
```

### Step 3: Start the Flask API Server

```bash
# Still in backend folder
python app.py
```

The Flask server will start at `http://localhost:5000`

Available endpoints:
- `GET /api/health` - Health check
- `POST /api/predict` - Make prediction

### Step 4: Start the Next.js Frontend

Open a new terminal:

```bash
# From project root
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## How It Works

### Machine Learning Model

- **Algorithm**: Random Forest Classifier
- **Dataset**: PIMA Indians Diabetes Dataset (768 samples, 8 features)
- **Features**:
  1. Pregnancies - Number of times pregnant
  2. Glucose - Plasma glucose concentration
  3. Blood Pressure - Diastolic blood pressure (mm Hg)
  4. Skin Thickness - Triceps skin fold thickness (mm)
  5. Insulin - 2-Hour serum insulin (mu U/ml)
  6. BMI - Body mass index
  7. Diabetes Pedigree Function - Genetic likelihood score
  8. Age - Age in years

### Data Flow

1. User enters health metrics in the frontend form
2. Frontend sends POST request to `/api/predict`
3. Next.js API route tries to forward to Flask backend
4. If Flask is unavailable, uses local JavaScript model
5. Prediction result displayed with probabilities and risk level

### Risk Levels

- **Low**: < 30% diabetic probability
- **Moderate**: 30-50% diabetic probability
- **High**: 50-70% diabetic probability
- **Very High**: > 70% diabetic probability

## API Reference

### POST /api/predict

Request body:
```json
{
  "pregnancies": 4,
  "glucose": 165,
  "bloodPressure": 92,
  "skinThickness": 35,
  "insulin": 220,
  "bmi": 34.6,
  "diabetesPedigreeFunction": 1.05,
  "age": 48
}
```

Response:
```json
{
  "prediction": 1,
  "result": "Diabetic",
  "probability": {
    "not_diabetic": 23.45,
    "diabetic": 76.55
  },
  "risk_level": "Very High"
}
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
FLASK_API_URL=http://localhost:5000
```

## Technologies Used

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### Backend
- Python 3.9+
- Flask
- Flask-CORS
- Scikit-learn
- Pandas
- NumPy
- Joblib

## Troubleshooting

### "Model not loaded" error
Run `python train_model.py` in the backend folder first.

### Flask server not starting
Make sure the virtual environment is activated and all dependencies are installed.

### Frontend not connecting to Flask
- Check Flask is running on port 5000
- Check CORS is enabled
- The frontend has a local fallback model, so it will still work

## License

MIT License
