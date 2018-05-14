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
    apiKey: "caebadf768a884867595e3f499211aea",
    error: false
  };

  setLocation = (noNav, apiKey, coords, search, searchData) => {
    if (!search) {
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
          });
        }
      );
    } else {
      this.setState(prevState => ({
        ...prevState,
        location: {
          lat: coords.lat,
          lon: coords.lon
        },
        locationData: searchData,
        error: false
      }));
    }
  };

  changeLocationHandler = searchInput => {
    const { apiKey } = this.state;

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`;
    axios
      .get(url)
      .then(info => {
        const { data } = info;
        const { coord } = data;
        this.setLocation(null, apiKey, coord, true, data);
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };

  componentDidMount() {
    const { apiKey } = this.state;

    if (navigator) {
      const { geolocation } = navigator;

      geolocation.getCurrentPosition(
        data => {
          const { coords } = data;
          this.setLocation(false, apiKey, coords);
        },
        error => {
          this.setLocation(true, apiKey); // kada je "navigator" blokiran
        }
      );
    } else {
      console.log("else"); // kada browser ne podrzava "navigator"
    }
  }

  render() {
    const { locationData, error } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          <Layout
            error={error}
            changeLocationHandler={this.changeLocationHandler}
          >
            <WeatherDetails locationData={locationData} />
          </Layout>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
