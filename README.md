# AuthApp – Full Stack Authentication & User Management System

## 📌 Project Overview

AuthApp is a full-stack web application that provides a secure authentication and user management system.  
It supports **user signup, login, profile management**, and **role-based access control** with a dedicated **admin dashboard**.

The application is designed to demonstrate:

-   Secure authentication using JWT
-   Role-based authorization (Admin / User)
-   Proper frontend & backend validation
-   Clean API design
-   Responsive UI for desktop and mobile devices

This project is suitable as a **production-ready authentication boilerplate** or as a **learning reference for full-stack development**.

---

## 🛠 Tech Stack

### Frontend

-   **React** (Vite)
-   **React Router DOM**
-   **Axios** (API communication)
-   **Bootstrap 5** (UI & responsive design)
-   **Context API** (Auth & Toast notifications)

### Backend

-   **Node.js**
-   **Express.js**
-   **MongoDB** (Mongoose ODM)
-   **JWT (JSON Web Tokens)** for authentication
-   **bcrypt** for password hashing

### Tools & Utilities

-   **Vite** – Frontend build tool
-   **MongoDB Atlas / Local MongoDB**
-   **Git & GitHub** – Version control
-   **dotenv** – Environment variable management

---

## 📂 Project Structure

```text
fullstack-auth-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── user.controller.js
│   │   │   └── admin.controller.js
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── role.middleware.js
│   │   │   └── error.middleware.js
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── user.routes.js
│   │   │   └── admin.routes.js
│   │   ├── utils/
│   │   │   └── jwt.js
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   │   ├── auth.test.js
│   │   ├── user.test.js
│   │   └── admin.test.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   ├── AdminRoute.jsx
│   │   │   ├── ConfirmModal.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── ToastContainer.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ToastContext.jsx
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Signup.jsx
│   │   ├── styles/
│   │   │   ├── auth.css
│   │   │   ├── dashboard.css
│   │   │   ├── global.css
│   │   │   ├── navbar.css
│   │   │   ├── profile.css
│   │   │   └── toast.css
│   │   ├── utils/
│   │   │   └── toastEmitter.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── .gitignore
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

Follow the steps below to run the project locally on your machine.

### 📌 Prerequisites

Ensure you have the following installed:

-   **Node.js** (v18 or higher)
-   **npm** or **yarn**
-   **MongoDB** (Local or MongoDB Atlas)
-   **Git**

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-auth-app.git
cd fullstack-auth-app
```

### 2️⃣ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create Environment Variables
Create a .env file inside the backend directory:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend server:

```bash
npm run dev
```

The backend API will be available at:

```bash
http://localhost:3000
```

### 3️⃣ Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend application:

```bash
npm run dev
```

The frontend will be available at:

```bash
http://localhost:5173
```

### 4️⃣ Access the Application

-   • Open your browser and go to:
-   👉 http://localhost:5173
-   • Sign up as a User or Admin
-   • Login and explore the dashboard based on your role

### 🧪 Running Tests (Optional)

To run backend tests:

```bash
cd backend
npm test
```

## 🔐 Environment Variables

Backend (/backend/.env)

```bash
Variable             Description

PORT                 Port number for backend server
MONGO_URI            MongoDB connection string
JWT_SECRET           Secret key used to sign JWT tokens

```

## 🚀 Deployment Instructions

-   Platform: Render / Railway / AWS / Cyclic
-   • Steps:
-   1.  Push backend code to GitHub
-   2.  Create new backend service on hosting platform
-   3.  Set environment variables (MONGO_URI, JWT_SECRET)
-   4.  Deploy and obtain production API URL

Frontend Deployment

-   • Platform: Vercel / Netlify
-   • Steps:
-   1. Push frontend code to GitHub
-   2. Import repository into Vercel/Netlify
-   3. Set API base URL if required
-   4. Deploy frontend

## 📡 API Documentation

## 🛡 USER APIs TESTING

### 1- Signup API

-   Request Body (JSON)

```bash
{
  "fullName": "Demo User",
  "email": "demo@gmail.com",
  "password": "Demo@123",
  "role": "user"
}
```

Success Response (201)

```bash
{
  "token": "jwt_token_here",
  "user": {
    "id": "65a1f3...",
    "fullName": "Demo User",
    "email": "demo@gmail.com",
    "role": "user"
  }

```

-   ❌ Invalid Email Test

```bash
{
  "fullName": "Demo User",
  "email": "demo#gmail.com",
  "password": "Demo@123"
}
```

Response:

```bash
{
  "message": "Invalid email format"
}
```

### 2- Login API

-   Body (JSON)

```bash
{
  "email": "demo@gmail.com",
  "password": "Demo@123"
}
```

Expected Response (200)

```bash
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "65a...",
    "fullName": "Demo User",
    "email": "demo@gmail.com",
    "role": "user"
  }

```

### 3- GET CURRENT USER

-   Headers

```bash
Authorization: Bearer <token>
```

Expected Response

```bash
{
  "fullName": "Demo User",
  "email": "demo@gmail.com",
  "role": "user",
  "status": "active"
}
```

❌ Test without token → should return 401 Unauthorized

### 4- UPDATE PROFILE

-   Body

```bash
{
  "fullName": "Updated Demo User",
  "email": "updated@gmail.com"
}
```

Expected Response

```bash
{
  "message": "Profile updated successfully"
}
```

### 5- CHANGE PASSWORD

-   Body

```bash
{
  "password": "***Pass@123"
}
```

Expected Response

```bash
{
  "message": "Password updated successfully"
}
```

-   🔁 Re-test Login

```bash
email: "updated@gmail.com"
password: "***Pass@123"
```

## 🛡 ADMIN APIs TESTING

### 6- ADMIN LOGIN

Response should show:

```bash
"role": "admin"
```

### 7- GET ALL USERS

-   Headers

```bash
Authorization: Bearer <admin_token>
```

Expected Response

```bash
{
  "users": [
    {
      "_id": "65a...",
      "fullName": "Demo User",
      "email": "demo@gmail.com",
      "role": "user",
      "status": "active"
    }
  ],
  "totalPages": 1
}
```

### 8- DEACTIVATE USER

Example

```bash
PATCH http://localhost:3000/api/admin/users/65a123/deactivate
```

Response

```bash
{
  "message": "User deactivated"
}
```

### 9- ACTIVATE USER

Example

```bash
PUT http://localhost:3000/api/admin/users/:id/activate
```

Response

```bash
{
  "message": "User activated"
}
```

## Backend Deployed Render Link:

https://user-management-system-backend-uzly.onrender.com

## Frontend Deployed Vercel Link:

https://user-management-system-vert.vercel.app/login
