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


            const fiveDayQueryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + yourKey;
            axios.get(fiveDayQueryUrl)
                .then(function (response) {
                    console.log(response)

                  
                    for (i = 0; i < 5; i++) {
                        let blueCardDiv = Get1DayForcastDiv(response.data.list, i * 8);
                        const cardContainerEl = document.getElementById("cardContainer")
                        cardContainerEl.appendChild(blueCardDiv)
                    }


                });

        });


    //now generate 5 day forcast




});

function Get1DayForcastDiv(weatherList, index) {
    //make api call https://openweathermap.org/forecast5
    const blueRootDiv = document.createElement("div");
    blueRootDiv.setAttribute("class", "daycolor");
    
    const date1 = weatherList[index].dt_txt;
    const icon1 = weatherList[index].weather[0].icon;
    const Temperature1 = weatherList[index].main.temp;
    const humidity1 = weatherList[index].main.humidity;
    
    const date1Div = document.createElement("div");
    const icon1Div = document.createElement("div");
    const Temperature1Div = document.createElement("div");
    const humidity1Div = document.createElement("div");
    
    date1Div.innerText = date1;
    icon1Div.innerHTML = "<img src = 'http://openweathermap.org/img/wn/" + icon1 + "@2x.png'></img>";
    Temperature1Div.innerText = "Temperature: " + Temperature1;
    humidity1Div.innerText = "Humidity: " + humidity1;


    blueRootDiv.appendChild(date1Div);
    blueRootDiv.appendChild(icon1Div);
    blueRootDiv.appendChild(Temperature1Div);
    blueRootDiv.appendChild(humidity1Div);




    //"<img src = 'http://openweathermap.org/img/wn/" + icon1 + "@2x.png'></img>"
    //blueRootDiv.appendChild
    //return real div object with data in blue card
    return blueRootDiv;

}

