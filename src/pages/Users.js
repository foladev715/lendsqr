import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import UserComponent from "../components/UserComponent";

const Users = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-body">
        <SideBar />
        <UserComponent />
      </div>
    </div>
  );
};

export default Users;
