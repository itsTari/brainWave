const MenuSvg = ({ openSidebar }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        y={openSidebar ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openSidebar ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y={openSidebar ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openSidebar ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
