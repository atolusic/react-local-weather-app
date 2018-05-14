import React from "react";
import Search from "./Search";

const Layout = props => {
  const { changeLocationHandler, error } = props;

  return (
    <div>
      <Search error={error} changeLocationHandler={changeLocationHandler} />
      {props.children}
    </div>
  );
};

export default Layout;
