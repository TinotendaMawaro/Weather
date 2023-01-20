import "./style.css";
import { arrangeData, showError } from "./modules/view.js";
import validateInput from "./modules/utils/validate.js";
import getLocation from "./modules/currentLocation.js";
import locationIcon from "./assets/location.svg";
import searchImg from "./assets/search.svg";
import extractData from "./modules/weatherData.js";
import kToC from "./modules/utils/kelvinToCelsius.js";

document.querySelector(".location-icon").src = locationIcon;
document.querySelector(".search img").src = searchImg;
const searchBtn = document.querySelector(".search");
const cityNameInput = document.querySelector(".cityNameInput");

function displayWeather(city, converter) {
  extractData(city)
    .then((dataObj) => {
      arrangeData(dataObj, converter);
      document.querySelector(".main").classList.remove("hide");
      document.querySelector(".error").classList.add("hide");
    })
    .catch((err) => showError(err.message));
}

// events
document.querySelector(".status").addEventListener("click", getLocation);

searchBtn.addEventListener("click", () => {
  const city = cityNameInput.value;
  if (validateInput(city)) {
    displayWeather(city, kToC);
  } else {
    showError("Please enter a city name");
  }
});

window.addEventListener("keydown", (e) => {
  let city = cityNameInput.value;
  if (e.key === "Enter" && validateInput(city)) {
    e.preventDefault();
    displayWeather(city, kToC);
  }
});

window.onload = () => displayWeather("hyderabad", kToC);

export default displayWeather;