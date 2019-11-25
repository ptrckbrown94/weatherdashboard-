// Pseudo Code
// get user imput City
// imput should save history
// display City, date, icon for weather, temp, Humidity, Wind speed, UV index
// 5 day  forcast 
// date
// temp
//weather icon
//humidity 

// two different keys for different  functions

let cityNameEl = document.getElementById("cityName")
const searchbuttonEl = document.getElementById("searchButton")
console.log(searchbuttonEl)
searchbuttonEl.addEventListener("click", function () {
    event.preventDefault();
    const cityName = cityNameEl.value
    console.log(cityName)

    const yourKey = "15230fb51b42832a4b1f952cfbe1c3d1";
    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + yourKey;
    console.log(queryUrl)

    axios.get(queryUrl)
        .then(function (response) {
            // the retrieved data needed
            const weatherIcon = response.data.icon;
            const tempature = response.data.main.temp;
            const humidity = response.data.main.humidity;
            const windSpeed = response.data.wind.spead;
            const cityName = response.data.name;
            const longitude = response.data.coord.lon;
            const latitude = response.data.coord.lat;

        });



});


