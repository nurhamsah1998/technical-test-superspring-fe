const JobIcon = ({color = "#202224"}: {color?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={color}
      d="M.438.188h15.125v15.125H.438V.188m1.375 1.375v5.5h5.5v-5.5zm6.875 0v5.5h5.5v-5.5zM1.811 8.438v5.5h5.5v-5.5zm6.876 0v5.5h5.5v-5.5z"
    ></path>
  </svg>
);

export default JobIcon;
