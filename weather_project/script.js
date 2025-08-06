const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "ffaeba19c9896875e6a731f36ca65cbb"
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const getData = async (city)=>{
    console.log("Getting data");
    let response = await fetch(apiUrl + city + "&appid=" + apiKey);
    let data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h"
    document.querySelector(".city").innerHTML = data.name;
    
    if(response.status === "404" || data.cod === "404"){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h"
        document.querySelector(".city").innerHTML = data.name;
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "weather-app-img/images/clouds.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "weather-app-img/images/rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "weather-app-img/images/snow.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "weather-app-img/images/mist.png";
        }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "weather-app-img/images/clouds.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "weather-app-img/images/drizzle.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "weather-app-img/images/clear.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchButton.addEventListener("click", ()=>{
    getData(searchBox.value);
});

// Invalid City Name isn't working yet
