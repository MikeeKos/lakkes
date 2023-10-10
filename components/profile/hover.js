import React from "react";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-2">Settings</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title="Account" subtitle="Manage profile" />
        <Card title="Email" subtitle="Manage email" />
        <Card title="Team" subtitle="Manage team" />
        <Card title="Billing" subtitle="Manage cards" />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle }) => {
  return (
    <React.Fragment>
      <div
        className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {subtitle}
        </p>
      </div>
    </React.Fragment>
  );
};

export default HoverDevCards;
