import Flag from "../assets/flag.png";
import Avatar from "../assets/avatar.png";
import BurgerIcon from "../assets/icons/burgerIcon";
import SearchIcon from "../assets/icons/searchIcon";
import NotificationIcon from "../assets/icons/notificationIcon";
import ArrowIcon from "../assets/icons/arrowIcon";

function Header() {
  const fullName = window.localStorage.getItem("fullname");
  return (
    <div className="flex items-center p-6 h-[70px] sticky top-0 bg-white z-30 drop-shadow-lg justify-between">
      <div className="flex gap-5 items-center">
        <div className="cursor-pointer hover:bg-slate-100 rounded-lg">
          <BurgerIcon />
        </div>
        <div className="relative">
          <input
            placeholder="Search"
            className="bg-slate-200 outline-0 border-[1px] border-slate-300 py-2 pl-11 h-[38px] md:w-[388px] w-full text-[14px] rounded-full"
          />
          <div className=" absolute top-3 left-4">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer md:block hidden hover:bg-slate-100 rounded-lg">
          <NotificationIcon />
          <div className=" absolute -top-2 -right-1 text-[12px] bg-red-500 text-white flex justify-center items-center w-[18px] h-[18px] rounded-full">
            6
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={Flag} className="md:block hidden" />
          <select className=" outline-0 cursor-pointer md:block hidden">
            <option value="en">English</option>
            <option value="id">Indonesia</option>
          </select>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <img className=" rounded-full bg-slate-300" src={Avatar} />
          <div className="md:block hidden">
            <p className=" text-slate-600 font-bold text-[14px]">{fullName}</p>
            <p className=" text-slate-600 font-semibold text-[12px]">Admin</p>
          </div>
          <div className="border-[1px] md:flex hidden ml-5 border-slate-300 w-[18px] justify-center items-center h-[18px] rounded-full">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
