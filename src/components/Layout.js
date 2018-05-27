import React from "react";
import Search from "./Search";

const Layout = props => {
  const layoutStyle = {
    width: "50%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const { changeLocationHandler, error, startLoading } = props;

  return (
    <div style={layoutStyle}>
      <Search
        startLoading={startLoading}
        error={error}
        changeLocationHandler={changeLocationHandler}
      />
      {props.children}
    </div>
  );
};

export default Layout;
