import { Package, CircleCheckBig } from "lucide-react";
export default function Title() {
  return (
    <div className="dashboard-title">
      <Package className="dashboard-package" />
      <div className="description">
        <h2>iHUZA Inventory - System Overview</h2>
        <p>Monitor your iHUZA and product assignment in real time.</p>
        <div>
          <CircleCheckBig className="green" /> All Systems Operational
        </div>
      </div>
    </div>
  );
}
