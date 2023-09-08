import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout title={Outlet.title}>
      <Outlet />
    </DashboardLayout>
  );
};

export default Dashboard;
