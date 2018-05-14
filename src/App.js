import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";

import Layout from "./components/Layout";
import WeatherDetails from "./components/WeatherDetails";

class App extends Component {
  state = {
    locationData: {},
    location: {
      lat: null,
      lon: null
    },
    apiKey: "caebadf768a884867595e3f499211aea"
  };

  componentDidMount() {
    const { apiKey } = this.state;

    const setLocation = (noNav, coords) => {
      this.setState(
        prevState => ({
          ...prevState,
          location: {
            lat: noNav ? 45.815399 : coords.latitude,
            lon: noNav ? 15.966568 : coords.longitude
          }
        }),
        () => {
          const { lat, lon } = this.state.location;
          const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

          axios.get(url).then(data => {
            this.setState({ locationData: data.data });
            console.log(data);
          });
        }
      );
    };

    if (navigator) {
      const { geolocation } = navigator;

      geolocation.getCurrentPosition(
        data => {
          const { coords } = data;
          setLocation(false, coords);
        },
        error => {
          setLocation(true);
        }
      );
    } else {
      console.log("else"); // kada browser ne podrzava "navigator"
    }
  }

  render() {
    const { locationData } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          <Layout>
            <WeatherDetails locationData={locationData} />
          </Layout>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
