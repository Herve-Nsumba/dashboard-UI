import { Bell, Settings, Moon, UserRound } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="bg-[white] flex  flex-wrap items-center justify-between p-4 shadow-md  rounded-lg">
        <div>
          <h1 className="font-bold text-lg">Dashboard</h1>
          <p>Welcome Back, Admin</p>
        </div>
        <div className="flex gap-3 items-center">
          <Moon color="gray" size={20} />
          <Settings color="gray" size={20} />
          <Bell color="gray" size={20} />
          <p className="pl-3">Admin@ihuza.com</p>
          <div className="bg-primaryColor-500 rounded-full p-1.5">
            <UserRound />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
