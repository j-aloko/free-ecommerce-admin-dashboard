import React from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="itemsContainer">
        <div className="itemTitle">
          <span>Dashboard</span>
        </div>
        <div className="items">
          <Link to="/" className="link">
            <div className="subItem0Wrapper">
              <HomeOutlinedIcon className="subItem0" />
              <span className="subItem0">Home</span>
            </div>
          </Link>
          <div className="subItem1Wrapper">
            <TimelineOutlinedIcon className="subItem1" />
            <span className="subItem1">Analytics</span>
          </div>
          <div className="subItem2Wrapper">
            <ShowChartOutlinedIcon className="subItem2" />
            <span className="subItem2">Sales</span>
          </div>
        </div>
      </div>
      <div className="itemsContainer">
        <div className="itemTitle">
          <span>Quick Menu</span>
        </div>
        <div className="items">
          <Link to="/users" className="link">
            <div className="subItem0Wrapper">
              <PersonOutlinedIcon className="subItem0" />
              <span className="subItem0">Users</span>
            </div>
          </Link>
          <Link to="/products" className="link">
            <div className="subItem1Wrapper">
              <StorefrontOutlinedIcon className="subItem1" />
              <span className="subItem1">Products</span>
            </div>
          </Link>
          <div className="subItem2Wrapper">
            <AttachMoneyOutlinedIcon className="subItem2" />
            <span className="subItem2">Transactions</span>
          </div>
          <div className="subItem2Wrapper">
            <EqualizerOutlinedIcon className="subItem2" />
            <span className="subItem2">Reports</span>
          </div>
        </div>
      </div>
      <div className="itemsContainer">
        <div className="itemTitle">
          <span>Notifications</span>
        </div>
        <div className="items">
          <div className="subItem0Wrapper">
            <EmailOutlinedIcon className="subItem0" />
            <span className="subItem0">Mail</span>
          </div>
          <div className="subItem1Wrapper">
            <DynamicFeedOutlinedIcon className="subItem1" />
            <span className="subItem1">Feedback</span>
          </div>
          <div className="subItem2Wrapper">
            <ChatBubbleOutlineOutlinedIcon className="subItem2" />
            <span className="subItem2">Messages</span>
          </div>
        </div>
      </div>
      <div className="itemsContainer">
        <div className="itemTitle">
          <span>Staff</span>
        </div>
        <div className="items">
          <div className="subItem0Wrapper">
            <WorkOutlineOutlinedIcon className="subItem0" />
            <span className="subItem0">Manage</span>
          </div>
          <div className="subItem1Wrapper">
            <TimelineOutlinedIcon className="subItem1" />
            <span className="subItem1">Analytics</span>
          </div>
          <div className="subItem2Wrapper">
            <ErrorOutlinedIcon className="subItem2" />
            <span className="subItem2">Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
