import React from "react";

const WeatherDetails = props => {
  const { locationData, loading } = props;

  let weatherData = <p>Loading...</p>;

  if (locationData && loading === false) {
    weatherData = <p>{locationData.name}</p>;
  }

  return <div>{weatherData}</div>;
};

export default WeatherDetails;
