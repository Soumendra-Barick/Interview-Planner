# 🚀 Interview Platform - Full Stack Application

A modern full-stack web application for conducting and managing interviews with AI-powered features and secure authentication.

---

## 📌 Project Overview

The Interview Platform helps users manage and conduct interviews efficiently with AI-powered assistance.

### Users can:

✅ Create and manage secure user accounts  
✅ Conduct structured interviews  
✅ Generate automated interview reports  
✅ Upload and process files  
✅ Get AI-powered interview analysis and insights

---

# 🛠 Tech Stack

## Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **File Handling:** Multer
- **AI Integration:** AI Service
- **Security:** bcrypt + JWT

## Frontend

- **Framework:** React + Vite
- **Styling:** SCSS
- **State Management:** Context API
- **Routing:** React Router
- **Linting:** ESLint

---

# 📂 Project Structure

```bash
├── Backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   │
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   │
│   │   ├── App.jsx
│   │   ├── app.routes.jsx
│   │   ├── main.jsx
│   │   └── style/
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
│
└── README.md
```

---

# ✨ Features

## 🔐 Authentication

- User registration
- User login
- JWT-based authentication
- Protected routes
- Token blacklist management

---

## 📋 Interview Management

- Create interviews
- Conduct interviews
- Track interview history
- Generate reports
- Save interview data

---

## 📁 File Handling

- Secure file uploads
- File validation
- File processing

---

## 🤖 AI Features

- AI interview analysis
- Automated report generation
- Smart insights

---

# 📋 Prerequisites

Make sure you have installed:

- Node.js (v14+)
- npm (v6+)
- MongoDB (Local or Atlas)
- Git

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Soumendra-Barick/Interview-Planner.git

cd FullStack-project
```

---

## 2. Backend Setup

```bash
cd Backend

npm install
```

Create `.env`

```env
MONGODB_URI=your_mongodb_connection_string

PORT=5000

JWT_SECRET=your_secret_key

JWT_EXPIRE=7d

AI_API_KEY=your_api_key
```

Start backend server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 3. Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🌐 API Endpoints

## Authentication Routes

| Method | Endpoint              | Description |
|----------|----------------------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |

---

## Interview Routes

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/api/interview` | Get all interviews |
| POST | `/api/interview` | Create interview |
| GET | `/api/interview/:id` | Get interview |
| PUT | `/api/interview/:id` | Update interview |
| DELETE | `/api/interview/:id` | Delete interview |
| POST | `/api/interview/:id/report` | Generate report |

---

# 📜 Available Scripts

## Backend

Run development server

```bash
npm run dev
```

Run production server

```bash
npm start
```

Run tests

```bash
npm test
```

---

## Frontend

Start development server

```bash
npm run dev
```

Build application

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Run ESLint

```bash
npm run lint
```

---

# 🔒 Security Features

- Password hashing using bcrypt
- JWT authentication
- Protected routes
- File upload validation
- CORS configuration
- Environment variable protection

---

# 🚀 Deployment

## Backend Deployment (Render)

1. Push code to GitHub
2. Connect repository to Render
3. Add environment variables
4. Deploy backend

---

## Frontend Deployment (Vercel)

1. Connect GitHub repository
2. Select Frontend folder
3. Add environment variables
4. Deploy project

---

# 🧪 Testing

Backend tests:

```bash
cd Backend

npm test
```

Frontend tests:

```bash
cd Frontend

npm test
```

---

# 🛠 Troubleshooting

### MongoDB connection issue

- Check MongoDB URI
- Verify Atlas network access
- Make sure MongoDB service is running

### Port already in use

Change:

```env
PORT=5000
```

---

### CORS issue

Verify CORS settings inside:

```bash
Backend/src/app.js
```

---

### Module not found

Delete dependencies:

```bash
rm -rf node_modules package-lock.json

npm install
```

---

# 🤝 Contributing

1. Fork repository

2. Create branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push code

```bash
git push origin feature-name
```

5. Create Pull Request

---

# 📞 Contact

**Developer:** Soumendra Barick

GitHub:
https://github.com/Soumendra-Barick

---

⭐ If you like this project, consider giving it a star on GitHub.
