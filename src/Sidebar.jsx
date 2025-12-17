import {
  Laptop,
  Users,
  Package,
  Layers,
  ChartNoAxesGantt,
  LogOut,
} from "lucide-react";
export default function Sidebar() {
  return (
    <aside className="aside">
      <div className="heading">
        <Package className="package" />
        <div>
          <h1>iHUZA</h1>
          <p>INVENTORY</p>
        </div>
      </div>
      <div className="aside-options">
        <Laptop />
        Dashboard
      </div>
      <div className="aside-options">
        <Users />
        Users
        <span className="numbers">116</span>
      </div>
      <div className="aside-options">
        <ChartNoAxesGantt />
        Assignments
        <span className="numbers">100</span>
      </div>
      <div className="aside-options">
        <Layers />
        Categories
        <span className="numbers">90</span>
      </div>
      <div className="aside-options logout">
        <LogOut />
        Logout
      </div>
    </aside>
  );
}
