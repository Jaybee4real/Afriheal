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
    };
  }

  render() {
    const updateActiveScreen = (arg) => {
      this.setState({
        activeScreen: arg,
      });
    };

    const toggleNotification = () => {
      this.setState({
        notificationSidebarOpen: !this.state.notificationSidebarOpen,
      });
      console.log("clicked");
    };

    return (
      <div
        className={`dashboard-container ${
          this.state.notificationSidebarOpen ? "notification-bar-active" : ""
        }`}
      >
        <Sidebar
          activeScreen={this.state.activeScreen}
          updateActiveScreen={updateActiveScreen}
        />
        <main className="">
          <DashboardNav toggleNotification={toggleNotification} />
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
          <Notifications />
        </div>
      </div>
    );
  }
}
