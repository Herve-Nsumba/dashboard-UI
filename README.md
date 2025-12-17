# React Admin Dashboard

A clean and responsive **React dashboard application** built to display key system metrics such as users and products in a structured and scalable way. The project focuses on component reusability, clear data flow, and maintainable styling.

---

## 🚀 Features

* Component-based architecture using React
* Reusable statistic cards rendered from shared data
* Sidebar and navbar layout for real dashboard experience
* Conditional styling based on data values
* Responsive design for different screen sizes
* Combination of Tailwind CSS and custom vanilla CSS

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Users.jsx
│   └── Rates.jsx
├── Aside.jsx
├── Activities.jsx
├── Action.jsx
├── App.jsx
└── main.jsx
```

---

## 📊 Dashboard Logic

Each card displays a number, label, and icon, with styles applied conditionally based on the metric value. This approach avoids hardcoding UI elements and makes the dashboard easy to extend.

---

## 🎨 Styling Approach

* **Tailwind CSS** is used for spacing, layout, and utility-based styling
* **Custom vanilla CSS** is used for structural layout elements such as the sidebar
* Exact color values are applied using Tailwind arbitrary values for design accuracy

---

## 🧠 What I Learned

* How to structure a React project using reusable components
* Separating data from presentation for better scalability
* Passing and sharing data across components cleanly
* Combining Tailwind CSS with custom CSS effectively
* Writing readable and maintainable UI logic

---

## 🛠️ Tech Stack

* React
* Tailwind CSS
* Vanilla CSS
* Lucide React Icons
* Vite

---

## 📌 Future Improvements

* Fetch dashboard data from an API
* Add charts and analytics
* Implement state management for dynamic updates
* Improve accessibility and keyboard navigation

---

## 📄 License

This project is for learning and demonstration purposes.
