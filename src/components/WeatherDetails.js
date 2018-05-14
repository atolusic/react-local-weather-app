import React from "react";

const WeatherDetails = props => {
  const { locationData } = props;

  return (
    <div>{locationData ? <p>{locationData.name}</p> : <p>Loading...</p>}</div>
  );
};

export default WeatherDetails;
