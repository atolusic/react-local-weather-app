import React from "react";
import Paper from "material-ui/Paper";

const WeatherDetails = props => {
  const { locationData, loading, error } = props;

  // STYLE

  const paperContainerStyle = {
    height: "100%",
    width: "100%"
  };

  const paperStyle = {
    height: "70%",
    width: "100%",
    margin: "3rem auto",
    textAlign: "center",
    display: "block",
    backgroundColor: "rgba(255,255,255, 0.5)"
  };

  const locationDataContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const locationDataStyle = {
    fontSize: "2.5rem",
    padding: "2rem 0.7rem"
  };

  const locationName = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  };

  // LOCATION DATA

  let weatherData = <p>{error ? "Searching error" : "Loading..."}</p>;

  if (locationData && loading === false) {
    weatherData = (
      <div style={locationDataContainerStyle}>
        <div style={locationName}>
          <i className="material-icons md-dark">place</i>
          <p style={locationDataStyle}>{locationData.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={paperContainerStyle}>
      <Paper style={paperStyle} zDepth={4}>
        {weatherData}
        {console.log(locationData)}
      </Paper>
    </div>
  );
};

export default WeatherDetails;
