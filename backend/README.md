# Satellite AI Backend 🚀

The backend service for Satellite AI, built with FastAPI and TensorFlow/Keras for satellite image classification.

## 🛠️ Tech Stack

- **Framework**: FastAPI
- **ML Framework**: TensorFlow/Keras
- **Language**: Python 3.8+
- **Containerization**: Docker
- **API Documentation**: Swagger/OpenAPI

## 📁 Project Structure

```
backend/
├── app.py              # Main FastAPI application
├── requirements.txt    # Python dependencies
├── model/             # ML model files
│   ├── model.h5       # Trained model
│   └── model.keras    # Model architecture
└── notebook/          # Jupyter notebooks
    └── satellite-image-classification.ipynb
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or later
- pip
- virtualenv (recommended)

### Installation

1. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Start the server:
```bash
uvicorn app:app --reload --port 8000
```

4. Visit [http://localhost:8000/docs](http://localhost:8000/docs) for API documentation.

## 🐳 Docker Setup

Build and run using Docker:
```bash
docker build -t satellite-ai-backend .
docker run -p 8000:8000 satellite-ai-backend
```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PYTHONPATH` | Python path | `/app` |
| `ALLOWED_URL` | CORS allowed origin | `http://localhost:3000` |

## 🔄 API Endpoints

### Image Classification Endpoint

```http
POST /predict
Content-Type: multipart/form-data
```

#### Request Body
- `file`: Image file (jpg, png, or webp)

#### Response
```json
{
  "prediction": "desert",
  "confidence": 0.95
}
```

## 🧠 ML Model

The application uses a CNN model trained on satellite imagery:

- Input: 224x224 RGB images
- Output: Classification of landscape types
- Classes: Desert, Forest, Plain, etc.

### Model Architecture
- ResNet50 base
- Custom top layers
- Trained on satellite imagery dataset

## 🔧 Development

### Running Tests
```bash
pytest tests/
```

### Code Formatting
```bash
black .
isort .
```

### Type Checking
```bash
mypy .
```

## 📊 Performance

- Response Time: < 200ms
- Accuracy: ~98%

## 🔒 Security

- Input validation
- File size limits
- CORS protection
- Rate limiting

## 📚 Learn More

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [TensorFlow Documentation](https://www.tensorflow.org/docs)
- [Docker Documentation](https://docs.docker.com/)
