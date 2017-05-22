import { get } from 'axios'


  export function  getLocationCoords(){
    return new Promise((resolve, reject)=>{
        if (window.navigator.geolocation){
            //Get Browser's Geolocation
        window.navigator.geolocation.getCurrentPosition(
            (location) => {
            resolve({ lat: location.coords.latitude, lon: location.coords.longitude})
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED){
                      get('https://ipapi.co/json/')
                        .then(({ data: ipData }) => {
                            resolve({ lat : ipData.latitude , lon: ipData.longitude })
                        }).catch((error)=> reject(error))
                }else{
                    reject(error)
                }

            }
        )
        } else {
            //Fallback to IP
            get('https://ipapi.co/json/')
            .then(({ data: ipData }) => {
                resolve({ lat : ipData.latitude , lon: ipData.longitude })
            }).catch((error)=> reject(error))
          }
            })
    }

    export function fetchWeather(long, lat){
        const appid = '722ac3c3b3097d61c9fc3a387dec9db1'
        let url = 'https://weather.millergeek.xyz/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+appid
        return new Promise((resolve , reject)=>{
            get(url).then(({data: weatherData}) => {
                resolve(weatherData)
            }).catch((error) => reject(error))
        })
    }

   export function getCountryName(code){
       return new Promise((resolve, reject)=>{
           get(`https://restcountries.eu/rest/v2/alpha?codes=${code}`)
        .then(({data: countryData})=>{
            resolve(countryData[0].name)
        }).catch((error) => reject(error))
       })
        
   }