import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SideBar = () => {
  return (
    <div className="sidebar-div">
      <Sidebar>
        <Menu>
          <img src="/images/sidebar1.png" alt="" className="sidebar" />
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
