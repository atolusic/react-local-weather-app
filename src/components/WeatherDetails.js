import React from "react";
import Paper from "material-ui/Paper";

const WeatherDetails = props => {
  const { locationData, loading } = props;

  let weatherData = <p>Loading...</p>;

  if (locationData && loading === false) {
    weatherData = <p>{locationData.name}</p>;
  }

  // Style

  const paperStyle = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: "center",
    display: "inline-block"
  };

  return (
    <div>
      <Paper style={paperStyle} zDepth={4}>
        {weatherData}
      </Paper>
    </div>
  );
};

export default WeatherDetails;
