import React from "react";

const CardGeneric = ({ title, backgroundImage }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleEnterHover = () => {
    setHovered(true);
  };

  const handleLeaveHover = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleEnterHover}
      onMouseLeave={handleLeaveHover}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "200px",
        minHeight: "150px",
        maxHeight: "150px",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{title}</p>
      </div>
      <div
        style={{
          display: hovered ? "flex" : "none",
          backgroundColor: "rgb(0,0,0)",
          width: "100%",
          height: "60px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          transform: "translateY(60px)",
        }}
      >
        <button>▶️</button>
        <button>ℹ️</button>
      </div>
    </div>
  );
};

export default CardGeneric;
