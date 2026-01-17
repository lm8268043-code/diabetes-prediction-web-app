import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

print("=" * 50)
print("DIABETES PREDICTION MODEL TRAINING")
print("=" * 50)

print("\n[1/6] Loading PIMA Indians Diabetes Dataset...")

url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
column_names = [
    'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
    'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age', 'Outcome'
]
dataset = pd.read_csv(url, names=column_names)

print(f"   Dataset shape: {dataset.shape}")
print(f"   Columns: {list(dataset.columns)}")

print("\n[2/6] Data Preprocessing - Handling Missing/Zero Values...")

cols_with_zeros = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
for col in cols_with_zeros:
    zero_count = (dataset[col] == 0).sum()
    if zero_count > 0:
        median_val = dataset[col].median()
        dataset[col] = dataset[col].replace(0, median_val)
        print(f"   {col}: Replaced {zero_count} zeros with median ({median_val:.2f})")

print("\n[3/6] Splitting Data into Features and Target...")

X = dataset.drop('Outcome', axis=1)
y = dataset['Outcome']

print(f"   Features shape: {X.shape}")
print(f"   Target distribution: {dict(y.value_counts())}")

print("\n[4/6] Splitting into Train/Test Sets and Scaling...")

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(f"   Training set: {X_train_scaled.shape[0]} samples")
print(f"   Test set: {X_test_scaled.shape[0]} samples")

print("\n[5/6] Training Random Forest Classifier...")

model = RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1
)
model.fit(X_train_scaled, y_train)

print("   Model trained successfully!")

print("\n[6/6] Evaluating Model Performance...")

y_pred = model.predict(X_test_scaled)
accuracy = accuracy_score(y_test, y_pred)

print(f"\n   Accuracy: {accuracy * 100:.2f}%")
print("\n   Classification Report:")
print(classification_report(y_test, y_pred, target_names=['Not Diabetic', 'Diabetic']))

feature_importance = pd.DataFrame({
    'feature': column_names[:-1],
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print("\n   Feature Importance:")
for _, row in feature_importance.iterrows():
    print(f"   - {row['feature']}: {row['importance']:.4f}")

print("\n" + "=" * 50)
print("SAVING MODEL AND SCALER")
print("=" * 50)

model_dir = os.path.join(os.path.dirname(__file__), '..', 'model')
os.makedirs(model_dir, exist_ok=True)

model_path = os.path.join(model_dir, 'diabetes_model.joblib')
scaler_path = os.path.join(model_dir, 'scaler.joblib')

joblib.dump(model, model_path)
joblib.dump(scaler, scaler_path)

print(f"\n   Model saved to: {model_path}")
print(f"   Scaler saved to: {scaler_path}")

print("\n" + "=" * 50)
print("TRAINING COMPLETE!")
print("=" * 50)
