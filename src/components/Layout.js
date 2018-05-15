import React from "react";
import Search from "./Search";

const Layout = props => {
  const { changeLocationHandler, error, loading, startLoading } = props;

  return (
    <div>
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
