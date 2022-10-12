import { useState, useEffect } from "react";
import UserTable from "./UserTable";
import Filter from "./Filter";

const UserComponentNoFilter = () => {
  return (
    <div className="users-component">
      <h3 className="users-header">Users</h3>
      <div className="user-categories">
        <img
          src="/images/user-category1.png"
          alt=""
          className="user-category"
        />
        <img
          src="/images/user-category2.png"
          alt=""
          className="user-category"
        />
        <img
          src="/images/user-category3.png"
          alt=""
          className="user-category"
        />
        <img
          src="/images/user-category4.png"
          alt=""
          className="user-category"
        />
      </div>

      <UserTable />
    </div>
  );
};

export default UserComponentNoFilter;
