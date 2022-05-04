'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});


//takes api from the iss and displays the long and lat on a webpage
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {latitude, longitude} = data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    console.log(latitude);
    console.log(longitude);
}
getISS();


const apiw_url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.7382364&lon=-104.9848623&units=imperial&appid=37ab82abe04a5d8c883dc5c87388fb45';
async function getWeather() {
    const response = await fetch(apiw_url);
    const data = await response.json();
    console.log(data);

    //grabs main which includes the temps
    const {visibility , main} = data;

    //puts the temp into a variable
    document.getElementById('temp').textContent = main.temp;

    //logs the tempature
    console.log(main.temp);
}
getWeather();

const apij_url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.536799&lon=-105.102491&units=imperial&appid=37ab82abe04a5d8c883dc5c87388fb45';
async function getJackWeather() {
    const response = await fetch(apij_url);
    const data = await response.json();
    console.log(data);

    //grabs main which includes the temps
    const {visibility , main} = data;

    //puts the temp into a variable
    document.getElementById('temp2').textContent = main.temp;

    //logs the tempature
    console.log(main.temp);
}
getJackWeather();


/* works and returns function
function getvals(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.7382364&lon=-104.9848623&appid=37ab82abe04a5d8c883dc5c87388fb45',
        {
            method: "GET",

        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            return responseData;
        })
        .catch(error => console.warn(error));
}

getvals().then(response => console.log(response));

*/



/* this shows weather but doesnt return as a object
const response = fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.7382364&lon=-104.9848623&appid=37ab82abe04a5d8c883dc5c87388fb45')

    .then(res => {
    return res.json()

})
    .then(data => console.log(data))
*/


/*
fetch('https://reqres.in/api/users',{
    method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: 'User 1'
        })
})
    .then(res => {
       return res.json()
        })
    .then(data => console.log(data))
*/

