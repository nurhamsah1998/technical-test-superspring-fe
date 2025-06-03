import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import ClockIcon from "../assets/icons/clockIcon";
import JobIcon from "../assets/icons/jobIcon";
import VehicleListIcon from "../assets/icons/vehicleListIcon";
import NavBtnIcon from "../assets/icons/navBtnIcon";
import Header from "./header";
import SettingIcon from "../assets/icons/settingIcon";
import LogoutIcon from "../assets/icons/logOutIcon";
import {sidebarStore, useAtom} from "../store/sidebarStore";

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
  const [state, setState] = useAtom(sidebarStore);
  const {isMinimize} = state || {};
  const isMenuSettingSelected = location.pathname === "/setting";
  const handleLogout = () => {
    const isLogout = confirm("Logout ?");
    if (isLogout) {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("access_token");
      window.localStorage.removeItem("fullname");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("phone");
      window.location.reload();
    }
  };
  const handleClickTopBtnNav = () => {
    setState({isMinimize: !isMinimize});
  };

  if (!access_token) return <Navigate to="/login" replace />;
  return (
    <div>
      <div className="flex">
        <div
          style={{
            height: "calc(100dvh - 70px)",
            width: isMinimize ? "84px" : "240px",
          }}
          className="flex duration-100 sticky top-0 flex-col justify-between"
        >
          <div>
            {/* /// START HEADER */}
            <div className="h-[70px] duration-100 p-6 flex items-center justify-between">
              {!isMinimize && (
                <p className="font-bold text-[20px] text-[#43A6EE]">
                  GPS.ID TMS
                </p>
              )}

              <div
                onClick={handleClickTopBtnNav}
                className="hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <NavBtnIcon />
              </div>
            </div>
            {/* /// END HEADER */}
            <div className="p-5 relative grid gap-1">
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
                          ? isMinimize
                            ? ""
                            : "bg-[#43A6EE] text-white"
                          : "hover:bg-slate-100"
                      } flex items-center h-[50px] duration-100 w-full gap-4 rounded-lg cursor-pointer p-4`}
                    >
                      <div>
                        <Icon
                          color={
                            isSelected
                              ? isMinimize
                                ? "#43A6EE"
                                : "#fff"
                              : "#202224"
                          }
                        />
                      </div>
                      {!isMinimize && (
                        <p className="text-[14px]">{item.title}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-6 relative grid gap-1">
            <div className="flex items-center">
              <div
                className={`w-1 rounded-tr-lg rounded-br-lg h-[50px] absolute left-0 ${
                  isMenuSettingSelected ? "bg-[#43A6EE]" : "bg-white"
                }`}
              ></div>
              <div
                onClick={() => navigate("/setting")}
                className={`${
                  isMenuSettingSelected
                    ? isMinimize
                      ? ""
                      : "bg-[#43A6EE] text-white"
                    : "hover:bg-slate-100"
                } flex items-center h-[50px] w-full gap-4 rounded-lg cursor-pointer p-4`}
              >
                <div>
                  <SettingIcon
                    color={
                      isMenuSettingSelected
                        ? isMinimize
                          ? "#43A6EE"
                          : "#fff"
                        : "#202224"
                    }
                  />
                </div>
                {!isMinimize && <p className="text-[14px]">Setting</p>}
              </div>
            </div>
            <div className="flex items-center">
              <div
                onClick={handleLogout}
                className={`hover:bg-slate-100 flex items-center h-[50px] w-full gap-4 rounded-lg cursor-pointer p-4`}
              >
                <div>
                  <LogoutIcon />
                </div>
                {!isMinimize && <p className="text-[14px]">Logout</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Header />
          <div className=" bg-slate-200 min-h-dvh p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDrawer;
