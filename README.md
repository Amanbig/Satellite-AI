# Satellite AI 🛰️

A modern web application that uses AI to classify different types of areas from satellite images. The application can identify various terrains like deserts, plains, and other landscapes from satellite imagery.

## 🌟 Features

- 🔍 **Accurate Detection**: High-precision satellite image classification
- 🌍 **Global Coverage**: Analyze satellite imagery from anywhere
- ⚡ **Real-time Processing**: Fast and efficient image analysis
- 🌤️ **Weather Independent**: Reliable analysis in any conditions

## 🚀 Tech Stack

### Frontend
- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Framer Motion for animations

### Backend
- Python
- FastAPI
- TensorFlow/Keras
- Docker

## 🛠️ Installation

### Prerequisites
- Docker and Docker Compose
- Node.js 16+ (for local development)
- Python 3.8+ (for local development)

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/your-username/Satellite-AI.git
cd Satellite-AI
```

2. Start the application using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

### Manual Setup

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## 🌐 Environment Variables

### Frontend
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NODE_ENV`: Production/Development environment

### Backend
- `PYTHONPATH`: Python path configuration
- `ALLOWED_URL`: Frontend URL for CORS

## 📦 Project Structure

```
satellite-ai/
├── frontend/              # Next.js frontend application
│   ├── src/              # Source code
│   ├── public/           # Static files
│   └── ...
├── backend/              # Python FastAPI backend
│   ├── app.py           # Main application file
│   ├── model/           # AI model files
│   └── ...
└── docker-compose.yml    # Docker compose configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dataset sourced from [Kaggle - Satellite Image Classification](https://www.kaggle.com/datasets/mahmoudreda55/satellite-image-classification)
- Inspired by various satellite image classification projects


[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%E2%98%95%EF%B8%8F-orange?style=for-the-badge)](https://buymeacoffee.com/amanpreet)
