export function getWeatherClass(id) {
     if (id >= 200 && id < 300) {
       return 'wi wi-thunderstorm';
     } else if (id >= 300 && id < 400) {
       return 'wi wi-rain-mix';
     } else if (id >= 500 && id < 600) {
       return 'wi wi-rain';
     } else if (id >= 600 && id < 700) {
         return 'wi wi-snow';
     } else if (id >= 700 && id < 800) {
         return 'wi wi-windy';
     } else if (id  === 800) {
         return 'wi wi-day-sunny';
     } else if (id >= 801 && id < 900) {
         return 'wi wi-cloudy';
     } else if (id >= 900 && id < 907) {
         return 'wi wi-showers';
     } else if (id >= 907 && id < 1000) {
         return 'wi wi-day-cloudy-high';
     } else {
         return 'wi wi-thermometer-exterior';
     }
   }