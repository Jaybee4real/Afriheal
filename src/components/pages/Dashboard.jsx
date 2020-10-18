import React, { Component } from "react";
import DashboardNav from "../DashboardNav";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardNav/>
        <div className="">This Is The Dashboard</div>
      </>
    );
  }
}
