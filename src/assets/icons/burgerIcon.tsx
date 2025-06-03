const BurgerIcon = ({color = "#202224"}: {color?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <path
      fill={color}
      d="M3.75 6.563h16.5v1.375H3.75zm0 5.5h16.5v1.374H3.75zm0 5.5h16.5v1.375H3.75z"
      opacity="0.898"
    ></path>
  </svg>
);

export default BurgerIcon;
