import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import ClockIcon from "../assets/icons/clockIcon";
import JobIcon from "../assets/icons/jobIcon";
import VehicleListIcon from "../assets/icons/vehicleListIcon";
import NavBtnIcon from "../assets/icons/navBtnIcon";

type PropsNav = {
  path: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};
const nav: PropsNav[] = [
  {
    path: "/",
    title: "Dashboard",
    icon: ClockIcon,
  },
  {
    path: "/job",
    title: "Job",
    icon: JobIcon,
  },
  {
    path: "/vehicle-list",
    title: "Vehicle List",
    icon: VehicleListIcon,
  },
];
function DashboardDrawer() {
  const access_token = window.localStorage.getItem("access_token");
  const location = useLocation();
  const navigate = useNavigate();
  if (!access_token) return <Navigate to="/login" replace />;
  return (
    <div>
      <div className="flex">
        <div className="w-[240px]">
          {/* /// START HEADER */}
          <div className=" h-16 p-6 flex items-center justify-between">
            <p className="font-bold text-[#43A6EE]">GPS.ID TMS</p>
            <div className="hover:bg-slate-100 rounded-lg p-2 cursor-pointer">
              <NavBtnIcon />
            </div>
          </div>
          {/* /// END HEADER */}
          <div className="p-6 relative grid gap-1">
            {nav.map((item) => {
              const Icon = item.icon;
              const isSelected = location.pathname === item.path;
              return (
                <div key={item.title} className="flex items-center">
                  <div
                    className={`w-1 rounded-tr-lg rounded-br-lg h-[50px] absolute left-0 ${
                      isSelected ? "bg-[#43A6EE]" : "bg-white"
                    }`}
                  ></div>
                  <div
                    onClick={() => navigate(item.path)}
                    className={`${
                      isSelected
                        ? "bg-[#43A6EE] text-white"
                        : "hover:bg-slate-100"
                    } flex items-center h-[50px] w-full gap-4 rounded-lg cursor-pointer p-4`}
                  >
                    <div>
                      <Icon color={isSelected ? "#fff" : "#202224"} />
                    </div>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardDrawer;
