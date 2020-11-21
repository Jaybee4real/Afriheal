import React, { Component } from "react";
import DashboardNav from "../dashboardComponents/DashboardNav";
import Sidebar from "../dashboardComponents/DashboardSidebar";
import Home from "../dashboardComponents/Home";
import Appointments from "../dashboardComponents/Appointments";
import Profile from "../dashboardComponents/Profile";
import Messages from "../dashboardComponents/Messages";
import Community from "../dashboardComponents/Community";
import Notifications from "../dashboardComponents/Notifications";

import "../../styles/dashboard.scss";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: "Home",
      updateActiveScreen: this.updateActiveScreen,
      notificationSidebarOpen: false,
      sidebarOpen: false,
    };
  }

  render() {
    const updateActiveScreen = (arg) => {
      this.setState({
        activeScreen: arg,
        sidebarOpen: false,
      });
    };

    const toggleNotification = () => {
      this.setState({
        notificationSidebarOpen: !this.state.notificationSidebarOpen,
      });
    };

    const toggleSidebar = () => {
      this.setState({
        sidebarOpen: !this.state.sidebarOpen,
      });
      console.log("clicked", this.state.sidebarOpen);
    };

    return (
      <div
        className={`dashboard-container 
        ${this.state.notificationSidebarOpen ? "notification-bar-active" : ""}
        ${this.state.sidebarOpen ? "sidebar-open" : ""}
        `}
      >
        <Sidebar
          activeScreen={this.state.activeScreen}
          updateActiveScreen={updateActiveScreen}
          sidebarOpen={this.state.sidebarOpen}
        />
        <main className="">
          <DashboardNav
            toggleNotification={toggleNotification}
            toggleSidebar={toggleSidebar}
            sidebarOpen={this.state.sidebarOpen}
          />
          <div style={{ paddingTop: "6rem" }}>
            {this.state.activeScreen === "Home" ? (
              <Home />
            ) : this.state.activeScreen === "Appointments" ? (
              <Appointments />
            ) : this.state.activeScreen === "Community" ? (
              <Community />
            ) : this.state.activeScreen === "Messages" ? (
              <Messages />
            ) : this.state.activeScreen === "Profile" ? (
              <Profile />
            ) : (
              <Home />
            )}
          </div>
        </main>
        <div>
          <Notifications toggleNotification={toggleNotification} />
        </div>
      </div>
    );
  }
}
