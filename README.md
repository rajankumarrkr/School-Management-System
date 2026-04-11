# 📚 School Management Mini System

A full-stack web application to manage students and their assigned tasks.
Built using the MERN stack with authentication and a responsive dashboard UI.

---

## 🚀 Features

### 🔐 Authentication

* Admin login with JWT authentication
* Protected routes (only logged-in users can access dashboard)
* Secure password hashing using bcrypt

### 👨‍🎓 Student Management

* Add new students
* View all students
* Delete students

### 📚 Task Management

* Assign tasks to students
* View all tasks
* Mark tasks as completed

### 📊 Dashboard

* Combined view of students and tasks
* Fully responsive UI (mobile + desktop)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT Authentication
* bcrypt.js

---

## 📂 Project Structure

school-management/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── components/
│
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/your-username/school-management.git
cd school-management

---

### 2️⃣ Backend Setup

cd backend
npm install

Create `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev

---

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

---

## 🔑 Default Admin Login

Email: [admin@gmail.com](mailto:admin@gmail.com)
Password: 123456

---

## 🌐 API Endpoints

### Auth

POST /api/auth/login

### Students

GET /api/students
POST /api/students
PUT /api/students/:id
DELETE /api/students/:id

### Tasks

GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id

---

## 📦 Deployment (Optional)

* Frontend: Vercel
* Backend: Render / Railway

---

## 🎯 Future Improvements

* Edit student feature
* Search & filter
* Role-based authentication
* Better UI/UX enhancements

---

## 👨‍💻 Author

Rajan Kumar

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
