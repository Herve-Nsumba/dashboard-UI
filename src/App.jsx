import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Title from "./components/Title/Title.jsx";
import Rates from "./components/Navbar/Rates.jsx";
import Producrs from "./components/Navbar/Producrs.jsx";
import Users from "./components/Users.jsx";
import Sidebar from "./Sidebar.jsx";
import Activities from "./Activities.jsx";
import Work from "./Work.jsx";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Title />
          <Rates />
          <Producrs />
          <Users />

          <div className="flex gap-4 flex-col lg:flex-row justify-center">
            <Activities />
            <Work />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
