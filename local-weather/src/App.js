import React, { Component } from 'react'
import './App.css'
import { getCountryName, getLocationCoords, fetchWeather } from './components/Api'
import WeatherDisplay from './components/WeatherDisplay'
import GitHubForkRibbon from 'react-github-fork-ribbon';

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      id: null,
      city:'',
      country:'',
      description:'',
      temperature:0,
      humidity:0,
      country_name:'',
      speed:null
    }

  }

  componentDidMount(){
    getLocationCoords().then((coords) => {
      fetchWeather(coords.lon, coords.lat).then((weatherData) => {
        getCountryName(weatherData.sys.country).then((countryName)=>{
        this.setState({ country_name: countryName})
        })
        this.setState({
          id : weatherData.weather[0].id,
          city: weatherData.name,
          country: weatherData.sys.country,
          description: weatherData.weather[0].main,
          temperature: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          speed: weatherData.wind.speed
         })
         
      })
    })
  }


  render() {
    const linkStyle ={
      textDecoration : "none",
      color: "#fff",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <WeatherDisplay id={this.state.id} city={this.state.city} country={this.state.country} description={this.state.description}
        temperature={this.state.temperature} country_name={this.state.country_name} humidity={this.state.humidity} speed={this.state.speed}/>
        <div className="copy">
            <div className="footer">
 				   	   <i className="fa fa-code"></i>&nbsp; with &nbsp;<i className="fa fa-heart"></i>&nbsp; &amp; &nbsp;<i className="devicon-react-original colored"></i> by &nbsp;
                 <a href="https://shashank7200.github.io" target="_blank" style={linkStyle}>Shashank Shekhar</a>
 				   </div>
        </div>
        <GitHubForkRibbon href="//www.google.com"
                    target="_blank"
                    color="green"
                    position="right">
    See Source Code
  </GitHubForkRibbon>
      </div>
    );
  }

}

export default App;
