import React, { Component } from 'react'
import { getWeatherClass } from './WeatherClass'

class WeatherDisplay extends Component{
    constructor(props){
        super(props)

        this.state ={
            country:''
        }
        this.changeIntoCelsius = this.changeIntoCelsius.bind(this)
        this.changeIntoFahrenheit = this.changeIntoFahrenheit.bind(this)
    }

    changeIntoCelsius(event){
        event.preventDefault()
        const { temperature } = this.props
        const temp_celsius = (temperature-273.15).toFixed(1)
        document.querySelector('.wi-celsius').style.opacity= "1"
        document.querySelector('.wi-fahrenheit').style.opacity= "0.4"
        document.querySelector('.temp').innerHTML = `${temp_celsius}&deg;`
    }

    changeIntoFahrenheit(event){
        event.preventDefault()        
        const { temperature } = this.props
        const temp_fahrenheit = ((9/5)*(temperature-273.15)+32).toFixed(1)
        event.preventDefault()        
        document.querySelector('.wi-fahrenheit').style.opacity= "1"
        document.querySelector('.wi-celsius').style.opacity= "0.4"
        document.querySelector('.temp').innerHTML = `${temp_fahrenheit}&deg;`
    }


    render(){
        const {id, city, country, country_name, description, temperature, humidity, speed} = this.props
        const temp = (temperature-273.15).toFixed(1)
        const months = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];
        const days = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"]

        return(
            <div className="weather-box">
              <div className="user-location">
                 <h2 className="place">{city},<br/>{ country_name.length<=16?country_name:country }</h2>
                 <h3 className="date"><span>{new Date().getDate()}</span> <span>{months[new Date().getMonth()]}</span><br/><span>{days[new Date().getDay()]}</span></h3>
              </div>
              <hr/>
              <div className="temperature-display">
               <p className="temp">{temp}&deg;</p>
               <p className="weather-condition"><i className={getWeatherClass(id)}></i><br/><span>{description}</span></p>
              </div>
              <hr/>
              <div className="temperature-extras">
                <p className="humidity"><i className="wi wi-humidity"></i>&nbsp;<span>{humidity}%</span></p>
                <p className="wind_speed"><i className="wi wi-wind-direction"></i>&nbsp;<span>{speed}mph</span></p>
                <p className="change_metric"><i className="wi wi-celsius" onClick={this.changeIntoCelsius}></i>&nbsp;
                &nbsp;<i className="wi wi-fahrenheit" style={{opacity : 0.4}} onClick={this.changeIntoFahrenheit}></i></p>
              </div>
            </div>
        )
    }
}
   
export default WeatherDisplay