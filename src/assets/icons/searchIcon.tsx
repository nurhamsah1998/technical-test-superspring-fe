import * as React from "react";

const SearchIcon = ({color = "#202224"}: {color?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    fill="none"
    viewBox="0 0 17 17"
  >
    <g
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
      opacity="0.5"
    >
      <path
        d="M9.694 12.535A5.37 5.37 0 1 0 5.492 2.65a5.37 5.37 0 0 0 4.202 9.885"
        clipRule="evenodd"
      ></path>
      <path d="m11.39 11.39 4.166 4.166"></path>
    </g>
  </svg>
);

export default SearchIcon;
