const NavBtnIcon = ({color = "#202224"}: {color?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M12 6h8v2h-8zM4 16h8v2H4zm16-5H4v2h16z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      d="M20 6h.25v-.25H20zm-8 0v-.25h-.25V6zm8 2v.25h.25V8zm-8 0h-.25v.25H12zm0 8h.25v-.25H12zm-8 0v-.25h-.25V16zm8 2v.25h.25V18zm-8 0h-.25v.25H4zm0-7v-.25h-.25V11zm16 0h.25v-.25H20zM4 13h-.25v.25H4zm16 0v.25h.25V13zm0-7.25h-8v.5h8zM20.25 8V6h-.5v2zM12 8.25h8v-.5h-8zM11.75 6v2h.5V6zm.25 9.75H4v.5h8zm.25 2.25v-2h-.5v2zM4 18.25h8v-.5H4zM3.75 16v2h.5v-2zM4 11.25h16v-.5H4zM4.25 13v-2h-.5v2zM20 12.75H4v.5h16zM19.75 11v2h.5v-2z"
    ></path>
  </svg>
);

export default NavBtnIcon;
