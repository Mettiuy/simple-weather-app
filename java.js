let citiesData = {
  esfarayen: { temp: 22, dec: "Cloudy", windSpeed: 10 },
  tehran: { temp: -2, dec: "Windy", windSpeed: 25 },
  esfahan: { temp: 12, dec: "Suny", windSpeed: 2 },
  tabriz: { temp: 24, dec: "Snowy", windSpeed: 3 },
};
let citiesName = document.getElementById("citiesName");
let submit = document.getElementById("submit");

// DOM
let bigDiv = document.createElement("div");
let allTemp = document.createElement("span");
let allDec = document.createElement("span");
let allWind = document.createElement("span");

// AppendChildes
document.body.appendChild(bigDiv);
bigDiv.appendChild(allTemp);
bigDiv.appendChild(allDec);
bigDiv.appendChild(allWind);

// class list
bigDiv.classList.add("container");
allTemp.classList.add("temp");
allDec.classList.add("dec");
allWind.classList.add("wind");

// default txt
allTemp.innerText = " Temp: ";
allDec.innerText = " Condation :";
allWind.innerText = " WindSpeed :";

// end of DOM
submit.addEventListener("click", function () {
  let requestedCity = citiesName.value;
  let informationCity = citiesData[requestedCity];
  console.log(informationCity);
  // DOM \\
  allTemp.innerText = " Temp: " + informationCity.temp;
  allDec.innerText = " Condation :" + informationCity.dec;
  allWind.innerText = " WindSpeed :" + informationCity.windSpeed + "Km/h";
});

window.onload = function () {
  alert("You can test this cities : esfarayen ,  tehran , esfahan , tabriz");
};
