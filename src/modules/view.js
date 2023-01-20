import { today } from "./utils/DayName.js";

function showError(err) {
  let errorContainer = document.querySelector(".error");
  errorContainer.textContent = "";
  errorContainer.textContent = err;
  errorContainer.classList.remove("hide");
}

function changeBackground(code) {
  let container = document.querySelector("#container");
  switch (true) {
    case code === "03d" || code === "03n" || code === "04d" || code === "04n":
      container.removeAttribute("class");
      container.classList.add("cloud");
      break;

    case code === "09d" || code === "09n" || code === "10d" || code === "10n":
      container.removeAttribute("class");
      container.classList.add("rain");
      break;

    case code === "11d" || code === "11n" || code === "50d" || code === "50n":
      container.removeAttribute("class");
      container.classList.add("mist");
      break;

    case code === "13d" || code === "13n":
      container.removeAttribute("class");
      container.classList.add("snow");
      break;

    default:
      container.removeAttribute("class");
      container.classList.add("clear-sky");
  }
}

function arrangeData(obj, converter) {
  changeBackground(obj.iconCode);

  let description = document.querySelector(".desc");
  description.textContent = obj.description;

  let city = document.querySelector(".city-country");
  city.textContent = `${obj.city}, ${obj.country}`;

  let dayName = document.querySelector(".day");
  dayName.textContent = today;

  let temp = document.querySelector(".temp");
  temp.textContent = converter(obj.temp);

  let feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = `feels like ${converter(obj.feelsLike)}`;

  let humidity = document.querySelector(".humidity");
  humidity.textContent = `humidity ${obj.humidity}%`;
}

export { showError, arrangeData };