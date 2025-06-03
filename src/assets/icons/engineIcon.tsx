const EngineIcon = ({color = "#28C76F"}: {color?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    fill="none"
    viewBox="0 0 20 21"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 8.626v5M10 4.46v2.5m-1.667-2.5h3.334m-7.5 6.666H2.5m2.5-2.5h1.667L8.333 6.96h2.819a.83.83 0 0 1 .745.46l1.206 2.412a.83.83 0 0 0 .745.46H15V8.627h1.667a.833.833 0 0 1 .833.834v5a.833.833 0 0 1-.833.833H15v-1.667h-2.5v1.667a.833.833 0 0 1-.833.833H8.779a.84.84 0 0 1-.693-.37l-1.42-2.13H5z"
    ></path>
  </svg>
);

export default EngineIcon;
