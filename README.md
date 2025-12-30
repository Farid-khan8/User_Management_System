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
