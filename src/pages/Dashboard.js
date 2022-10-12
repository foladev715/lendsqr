import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import UserComponentNoFilter from "../components/UserComponentNoFilter";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-body">
        <SideBar />
        <UserComponentNoFilter />
      </div>
    </div>
  );
};

export default Dashboard;
