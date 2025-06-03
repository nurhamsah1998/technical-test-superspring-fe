const ArrowIcon = ({color = "#646464"}: {color?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      fill={color}
      d="M5 3.925 1.913.837a.583.583 0 0 0-.825.825l3.5 3.5a.583.583 0 0 0 .824 0l3.5-3.5a.583.583 0 1 0-.824-.825z"
    ></path>
    <mask
      id="mask0_1_1562"
      width="10"
      height="6"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{maskType: "luminance"}}
    >
      <path
        fill="#fff"
        d="M5 3.925 1.913.837a.583.583 0 0 0-.825.825l3.5 3.5a.583.583 0 0 0 .824 0l3.5-3.5a.583.583 0 1 0-.824-.825z"
      ></path>
    </mask>
  </svg>
);

export default ArrowIcon;
