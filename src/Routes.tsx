import {Navigate, useRoutes} from "react-router-dom";
import DashboardDrawer from "./components/dashboard-drawer";
import DashboardPage from "./layouts/dashboard-page";
import JobPage from "./layouts/job-page";
import VehicleListPage from "./layouts/vehicle-list-page";
import LoginPage from "./layouts/login-page";
import NotFoundPage from "./layouts/not-found-page";
import SettingPage from "./layouts/setting-page";

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardDrawer />,
      children: [
        {
          element: <DashboardPage />,
          index: true,
        },
        {
          element: <JobPage />,
          path: "/job",
        },
        {
          element: <VehicleListPage />,
          path: "/vehicle-list",
        },
        {
          element: <SettingPage />,
          path: "/setting",
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/404",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <Navigate replace to="/404" />,
    },
  ]);
}

export default Routes;
