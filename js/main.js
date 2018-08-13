//select the element and creat variable
var cityTitle = document.querySelector(".citytitle")
var input = document.querySelector("input")
var weather = document.querySelector(".weather")
var image = document.querySelector(".icon")
var temp = document.querySelector(".temp")
var humidity = document.querySelector(".humid")
var deg = document.querySelector(".deg")
var API_KEY = "f1a862fbec06a53f015b7bc454860083"
var url = "http://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}"
var kelvin
var convert = document.querySelector(".convert")
var icons = {
    "Clouds" : "img/cloudy.png",
    "Clear" : "img/sun.png",
    "Party-Cloudy" : "img/partly-cloudy.png",
    "Rainy" : "img/rain.png",
    "Snow" : "img/snow.png",
    "Thunderstorm" : "img/thunderstorm.png",
}


//define funtion
function getWeather(zipCode){
    //console.log("weather")
    $.ajax({
        type: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`,
        datatype: "json",
        success: function(data){
            console.log(data)
            cityTitle.textContent = data.name
            //weather[""0""].main
            weather.textContent = data.weather[0].main
            //main.temp
            kelvin = data.main.temp
            temp.textContent = kelvinToFarenheit()
            //main.humidity
            humidity.textContent = data.main.humidity
            image.src = icons[data.weather[0].main]
            
        },
        error: function(error){
            console.log("this is an error")
        }
        
    })
}
function kelvinToFarenheit(){
    return Math.round ((9/5) * (kelvin - 273))+32
}
function kelvinToCelcius(){
    return Math.round (kelvin - 275)
}
// add event listener

input.addEventListener('keypress',function(e){
    if(e.key == "Enter"){
        getWeather(input.value)
    }

})
convert.addEventListener('click',function(e){
    if (convert.textContent== "Convert to C"){
        temp.textContent = kelvinToCelcius()
        deg.innerHTML = "&deg.C"
        convert.textContent = "Convert to F"
    }else{
        temp.textContent = kelvinToFarenheit()
        deg.innerHTML = "&deg.F"
        convert.textContent = "Convert to C"
    }


})
getWeather('33162')