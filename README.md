# DevConnect Frontend

A developer networking platform built with modern frontend technologies.

---

## ✨ Features

* Added Logo for DevConnect
* Responsive Navbar and Footer
* Landing Page (with Footer and Navbar)
* **Frontend–Backend Integration via CORS** — configured origin and `withCredentials: true` to connect frontend (port 5173) with backend running on a separate port
* **Axios Integration** — replaced Fetch with Axios for API calls; passing `withCredentials: true` and request payloads (email & password) to the login endpoint
* **Redux Store with Redux Toolkit** — created a `userSlice` with `addUser` and `removeUser` actions; on successful login, user data from the backend is dispatched into the store
* **Conditional Navbar Rendering** — Navbar dynamically updates based on auth state; logged-in users see a personalized avatar showing the first letter of their name

---

## 🛠️ Tech Stack

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

---

## 📦 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
git clone https://github.com/amanuniyal01/devConnect-Frontend.git
cd devConnect-Frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📁 Project Structure

```
devConnect-Frontend/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── utils/
│   │   ├── appStore.js
│   │   └── userSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---


