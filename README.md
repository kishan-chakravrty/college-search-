# EduDecision - College Comparison & Predictor

A modern web application to help students find and compare colleges, predict admission chances, and get answers to their education-related questions.

## 🚀 Features

- **College Search & Discovery** - Browse and search colleges with detailed information
- **College Comparison** - Compare up to 3 colleges side by side
- **Admission Predictor** - Predict your chances of admission based on your profile
- **Q&A Forum** - Ask and answer college-related questions
- **User Dashboard** - Personalized dashboard for logged-in users
- **Authentication** - Secure user login and signup

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Context API
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **HTTP Client**: Axios

## 📋 Prerequisites

- Node.js 14+ 
- npm or yarn

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kishan-chakravrty/college-search-.git
   cd college-search-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## 📦 Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This app is configured for GitHub Pages deployment.

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The app will be live at: `https://kishan-chakravrty.github.io/college-search-`

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
├── contexts/         # React Context for state management
├── pages/            # Page components for routes
├── services/         # API services and utilities
├── App.tsx           # Main app component
├── index.tsx         # App entry point
└── index.css         # Global styles
```

## 🔐 Authentication

Currently uses mock authentication with localStorage. For production:
- Replace mock auth with real API endpoints
- Implement JWT token management
- Add proper error handling

## 🚨 Production Checklist

- [ ] Update API endpoints in `src/services/api.ts`
- [ ] Add environment variables (.env file)
- [ ] Enable GitHub Pages in repository settings
- [ ] Test all routes and features
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up proper error logging
- [ ] Implement rate limiting for APIs
- [ ] Add HTTPS enforcement

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Kishan Chakravrty**
- GitHub: [@kishan-chakravrty](https://github.com/kishan-chakravrty)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, please open an issue on GitHub or contact the maintainer.
