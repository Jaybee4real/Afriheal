import React, { Component } from "react";
import DashboardNav from "../DashboardNav";
import Sidebar from "../DashboardSidebar";
import Home from "../DashboardHome";

import "../../styles/dashboard.scss";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <main>
          <DashboardNav />
          <Home />
        </main>
      </>
    );
  }
}
 