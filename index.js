var x = document.getElementById("out")
var y = document.getElementById("address")
var z = document.getElementById('icon')
function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {
    console.log(data)
    x.innerText = `Latitude is ${data.coords.latitude}, longitude is ${data.coords.longitude}`
    let lat = data.coords.latitude;
    let long = data.coords.longitude
    var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    /*var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=`;
    */
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            /*data.list.map((item) => {
                console.log(item.temp.day)
                y.innerText=`${item.temp.day}°C and ${item.weather[0].description}`
                z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
            })*/

        })
}



function test() {
    document.getElementById('coupon').style.visibility = "visible"
}

function closeDiv() {
    document.getElementById('coupon').style.visibility = "hidden"
}

function changeColor(color) {
    if (color == 'red') {
        document.getElementById('coupon').style.backgroundColor = "red"
    } else if (color == 'green') (
        document.getElementById('coupon').style.backgroundColor = "green"
    )

}