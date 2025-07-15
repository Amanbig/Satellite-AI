from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import tensorflow as tf
from tensorflow.keras.utils import img_to_array, load_img
import numpy as np
from io import BytesIO

model = tf.keras.models.load_model("./model/model.h5")

labels = ['cloudy', 'desert', 'green_area','water']

app = FastAPI()

# Allow CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.getenv("ALLOWED_URL", "http://localhost:3000"),
    ],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get('/dataset')
async def dataset():
    return {
        "link": "https://www.kaggle.com/datasets/mahmoudreda55/satellite-image-classification"
    }

@app.get('/notebook')
async def notebook():
    return {
        "link":"https://www.kaggle.com/code/amanu1234/sattelite-image-classification"
    }

@app.post('/predict')
async def predict(file: UploadFile = File(...)):
    # Read uploaded file contents into memory
    contents = await file.read()

    # Convert bytes into a PIL Image, resize to model's input size
    img = load_img(BytesIO(contents), target_size=(128, 128))
    img = img_to_array(img) / 255.0
    img = np.expand_dims(img, axis=0)  # shape (1, 128, 128, 3)

    # Predict
    pred = model.predict(img)
    predicted_class = np.argmax(pred)

    return {
        "prediction": labels[predicted_class],
    }