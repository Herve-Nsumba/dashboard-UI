import { Users, Package, CircleCheckBig, TriangleAlert } from "lucide-react";
import React from "react";

function Rates() {
  const rates = [
    { nber: 110, text: "Total Users", icon: Users },
    { nber: 100, text: "Total Products", icon: Package },
    { nber: 10, text: "Assigned Products", icon: CircleCheckBig },
    { nber: 90, text: "Unassigned Products", icon: TriangleAlert },
  ];

  // map number → styles
  const styleByNumber = {
    110: "text-[#2462eb] bg-[#dbe9fd]",
    100: "text-[#2462eb] bg-[#dbe9fd]",
    10: "text-[#16a349] bg-[#dbfbe6]",
    90: "text-[#ca8903] bg-[#fdf9c3]",
  };

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4">
      {rates.map((rate, index) => {
        const Icon = rate.icon;
        const styles = styleByNumber[rate.nber] || "bg-gray-200 text-gray-700";

        return (
          <div
            key={index}
            className="w-55 bg-white p-4 shadow-md rounded-md flex items-center gap-4"
          >
            <div className={`p-2 rounded-md ${styles}`}>
              <Icon size={24} />
            </div>

            <div>
              <h2 className="font-bold text-[18px]">{rate.nber}</h2>
              <p className="text-sm">{rate.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rates;
