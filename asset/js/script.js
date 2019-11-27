// Pseudo Code
// get user imput City
// imput should save history
//save 5 cities in history in local storage
// key using an index 0-4 (5 cities)
// index 0-4 is the key and city is value
//   const toDoData = localStorage.getItem(i);     
// localStorage.setItem(index, JSON.stringify(noteArray[index]));

// display City, date, icon for weather, temp, Humidity, Wind speed, UV index
// Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
// 5 day  forcast 
//date
//temp
//weather icon
//humidity 

// two different keys for different  functions

let cityNameEl = document.getElementById("cityName")
const searchbuttonEl = document.getElementById("searchButton")
console.log(searchbuttonEl)
searchbuttonEl.addEventListener("click", function () {
    event.preventDefault();
    const searchCityName = cityNameEl.value
    console.log(searchCityName)
    //now read storage shift elements down by one append searchCityName to 0 save results back to local storage
    //generate 5 element table divs based on local storage 


    const yourKey = "15230fb51b42832a4b1f952cfbe1c3d1";

    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCityName + "&units=imperial&appid=" + yourKey;
    console.log(queryUrl)

    axios.get(queryUrl)
        .then(function (response) {
            // the retrieved data needed
            const weatherIcon = response.data.weather[0].icon;
            const tempature = response.data.main.temp;
            const humidity = response.data.main.humidity;
            const windSpeed = response.data.wind.speed;
            const cityName = response.data.name;
            const longitude = response.data.coord.lon;
            const latitude = response.data.coord.lat;
            let currentDate = moment().format('LL');
            console.log(response);
            const uvQueryUrl = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=" + yourKey + "&lat=" + latitude + "&lon=" + longitude + "&cnt=0"
            console.log(uvQueryUrl)

            // I had to put this function within the other function because I could not retrieve uvIndex variable
            axios.get(uvQueryUrl)
                .then(function (response) {
                    console.log(response);
                    const uvIndex = response.data[0].value;



                    // using the above results and generate div with col and row to show current days forcast
                    document.querySelector(".city").innerHTML = cityName + " " + currentDate + "<img src = 'http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png'></img>";
                    document.querySelector(".temp").innerText = "Temperature (F): " + tempature;
                    document.querySelector(".humid").innerText = "Humidity: " + humidity + "%";
                    document.querySelector(".wind").innerText = "Wind Speed: " + windSpeed;
                    document.querySelector(".UV").innerText = "UV Index: " + uvIndex;
                });

        });


    //now generate 5 day forcast
    for (i = 0; i < 5; i++) {
        let blueCardDiv = Get1DayForcastDiv(searchCityName, i);

    }




});

function Get1DayForcastDiv(cityNameString, dayNumber) {
    //make api call https://openweathermap.org/forecast5
    const blueRootDiv = document.createElement("div");
    //blueRootDiv.appendChild
    //return real div object with data in blue card
    return blueRootDiv;

}
 
const fiveDayQueryUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude;  
axios.get(fiveDayQueryUrl)
                .then(function (response){
                console.log(fiveDayQueryUrl)

                });