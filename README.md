# 🚀 **InvestMate — Stock Trading Platform**

A complete end‑to‑end stock trading & portfolio management system built as a semester project. Includes secure authentication, dynamic dashboard, order execution, holdings tracking, admin APIs, JWT protection, and clean UI deployed on Render.

---

## 🌐 **Live Deployments**

| Service               | Link                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **Main Frontend**     | [https://invest-mate-z8ay.vercel.app/](https://invest-mate-z8ay.vercel.app/)           |
| **User Dashboard**    | [https://investmatedashboard.onrender.com/](https://investmatedashboard.onrender.com/)         |
| **Backend API**       | [https://investmate-2f43.onrender.com](https://investmate-2f43.onrender.com)                   |
| **GitHub Repository** | [https://github.com/iprabhakersingh/InvestMate](https://github.com/iprabhakersingh/InvestMate) |

---

## 📖 **Project Overview**

InvestMate is a simulation of real-world stock trading where users can:

* Create an account & login securely
* View portfolio summary instantly
* Buy & sell stocks
* Track holdings & completed orders
* Access charts, analytics & performance insights

The architecture separates **Frontend**, **Dashboard**, and **Backend** into isolated deployments for scalability & clarity.

---

## ✨ **Key Features**

### 🔐 **Authentication**

* JWT-based secure login/signup
* Token verification middleware
* Fully protected dashboard routes

### 📊 **User Dashboard**

* Real-time holdings & positions display
* Detailed portfolio performance
* Interactive charts & analytics
* Clean UI with responsive layout

### 💸 **Order Management**

* Buy & Sell operations with validation
* Balance/quantity checking
* Server-side error handling
* Instant UI feedback

### ⚙️ **Backend (API Layer)**

* Node.js + Express structured controllers
* MongoDB + Mongoose ORM
* Token & role-based access control
* Organized REST APIs

---

## 🏗 **Tech Stack**

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

## ⚙️ **Installation Guide (Local Setup)**

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/iprabhakersingh/InvestMate
cd InvestMate
```

---

### **2️⃣ Backend Setup**

```bash
cd backend
npm install
npm start
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
PORT=3001
```

---

### **3️⃣ Frontend Setup**

```bash
cd frontend
npm install
npm start
```

---

### **4️⃣ Dashboard Setup**

```bash
cd dashboard
npm install
npm start
```

---

## 📦 **API Overview**

### 🔐 **Auth Routes**

* POST `/auth/signup`
* POST `/auth/login`

### 💸 **Order Routes**

* POST `/order/buy`
* POST `/order/sell`
* GET `/order/all`

### 📊 **Holdings Routes**

* GET `/holdings/index`

---

## 🤝 **Contribution Guide**

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📝 **License**

This project is for educational and learning purposes.

---

## 👤 **Author**

**Prabhaker Singh**

**Project:** InvestMate
