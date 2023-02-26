import React from "react";
import Drawer from "@mui/material/Drawer";
import { height } from "@mui/system";

const Sidebar = ({ openDrawer, setOpenDrawer }) => {
  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={handleClose}>
      <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <h2>Drawer Content</h2>
        <p>Some text here</p>
      </div>
    </Drawer>
  );
};

export default Sidebar;
