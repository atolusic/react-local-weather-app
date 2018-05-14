import React from "react";
import Search from "./Search";

const Layout = props => {
  return (
    <div>
      <Search />
      {props.children}
    </div>
  );
};

export default Layout;
