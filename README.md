🚀 InvestMate — Full Stack Stock Trading Platform

A complete end-to-end stock trading & portfolio management system built as a semester project. Includes user dashboard, order execution, holdings tracking, admin APIs, JWT security, and a smooth frontend deployed on Render.

🌐 Live Deployments
Service	URL
Main Frontend	https://investmatefrontend.onrender.com/
User Dashboard	https://investmatedashboard.onrender.com/
Backend API	https://investmate-2f43.onrender.com
GitHub Repository	https://github.com/iprabhakersingh/InvestMate
📖 Overview

InvestMate simulates a real stock trading experience where users can:

Create an account & login securely

View portfolio summary instantly

Place Buy/Sell orders

Track live holdings and order history

View charts, analytics & stock insights

The platform is designed with a clean architecture — separating frontend, dashboard, and backend into different deployments.

✨ Key Features
🔐 Authentication

Secure JWT-based login/signup

Automatic token verification middleware

Protected routes for dashboard & holdings

📊 User Dashboard

Real-time holdings & positions

Portfolio performance overview

Order history tracking

Interactive charts/graphs

💸 Order Management

Buy & Sell stock operations

Validation for balance & quantity

Server-side error handling with proper UI alerts

⚙️ Backend (Admin + API)

Node + Express structured controllers

MongoDB for scalable storage

Middleware-based access control

Well-defined REST endpoints

---

## 🏗 Tech Stack

### **Frontend**

* React.js
* React Router
* Context API
* Material UI

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose

### **Deployment**

* Render (Frontend + Dashboard + Backend)
* GitHub for Version Control

---

## ⚙️ Installation Guide (Local Setup)

### **Clone Repo**

```bash
git clone https://github.com/iprabhakersingh/InvestMate
cd InvestMate
```

### **Backend Setup**

cd backend
npm install
npm start
```

Make sure to add your `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
PORT=3001
```

### **Frontend Setup**

cd frontend	
npm install
npm start

```

### **Dashboard Setup**
```

cd dashboard
npm install
npm start

---

## 📦 API Overview

### **Auth Routes**

* POST `/auth/signup`
* POST `/auth/login`

### **Order Routes**

* POST `/order/buy`
* POST `/order/sell`
* GET `/order/all`

### **Holdings Routes**

* GET `/holdings/index`

---

## 🤝 Contribution

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Create a pull request

---

## 📝 License

This project is for educational and personal learning purposes.

---

## 👤 Author

**Prabhaker Singh**
Project: InvestMate

* GitHub: [https://github.com/iprabhakersingh](https://github.com/iprabhakersingh)
* Project: InvestMate
