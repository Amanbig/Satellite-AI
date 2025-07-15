# Satellite AI Frontend 🎨

The frontend application for Satellite AI, built with Next.js 13+ and modern web technologies. This application provides an intuitive interface for satellite image classification.

## ✨ Features

- 🖼️ **Modern UI/UX**: Clean and responsive design with Shadcn UI components
- 🌓 **Dark Mode**: Full dark mode support for better user experience
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎭 **Animations**: Smooth transitions and animations using Framer Motion
- 📤 **Drag & Drop**: Easy file upload with drag and drop support
- 🔍 **Image Preview**: Real-time preview of uploaded satellite images
- 🚀 **Fast Analysis**: Quick response times with optimized API calls

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **HTTP Client**: Native Fetch API

## 📁 Project Structure

```
src/
├── app/                    # App router pages
│   ├── page.tsx           # Home page
│   ├── detect/            # Image detection page
│   └── api/               # API routes
├── components/            
│   ├── detectImage/       # Image detection components
│   ├── heroSection/       # Landing page hero section
│   ├── previewImages/     # Image preview components
│   └── ui/                # Reusable UI components
└── lib/                   # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/Satellite-AI.git
cd Satellite-AI/frontend
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

4. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

## 🌍 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:8000` |
| `NODE_ENV` | Environment mode | `development` |

## 🎯 Key Components

### Detection Page
- Upload satellite images
- Real-time image preview
- Classification results display
- Error handling and loading states

### Home Page
- Hero section with call-to-action
- Feature showcase
- How it works section
- Image preview gallery

### Reusable Components
- Custom Button component
- File Upload with drag & drop
- Alert notifications
- Animated background patterns

## 🔄 API Integration

The frontend communicates with the backend through RESTful endpoints:

```typescript
// Example API call
const detectArea = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/predict', {
    method: 'POST',
    body: formData,
  });
  
  return response.json();
};
```

## 🎨 Styling

We use Tailwind CSS for styling with custom configuration:
- Custom color palette
- Responsive breakpoints
- Dark mode support
- Animation utilities

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
