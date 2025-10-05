// http://api.weatherapi.com/v1/current.json?key=1a54bfaab9624f10b7a44125251001&q=Pune&aqi=no
const temperatureField = document.querySelector(".temperature p");
const timeField = document.querySelector("#time");
const nameField = document.querySelector("#name");
const weatherFieldtext = document.querySelector("#text");
const iconfield = document.querySelector("#icon img");
const searchArea = document.querySelector(".search-area");
const form = document.querySelector("form");
let target = 'New Delhi'

form.addEventListener('submit', searchforlocation)

const fetchResults = async (targetLocation) =>{
let url = `http://api.weatherapi.com/v1/current.json?key=1a54bfaab9624f10b7a44125251001&q=${target}&aqi=no`
const res = await fetch(url);
const data = await res.json()
console.log(data)
    let locationName = data.location.name;
    let time = data.location.localtime;
    let temperature = data.current.temp_c;
    let condition = data.current.condition.text
    let conditionIcon = data.current.condition.icon
    updateDetails(locationName,time,temperature,condition, conditionIcon)

}
function searchforlocation(e){
    e.preventDefault();
    target = searchArea.value;
    fetchResults(target);
}
function updateDetails(locationName,time,temperature,condition, conditionIcon){
temperatureField.innerText = temperature
timeField.innerText = time
nameField.innerText = locationName
weatherFieldtext.innerText = condition
iconfield.src = `https:${conditionIcon}`;

}
fetchResults(target);