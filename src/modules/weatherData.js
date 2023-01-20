import fetchData from "./fetch.js";

export default async function extractData(city) {
  const response = await fetchData(city);
  if (response.ok) {
    const data = await response.json();
    return {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      description: data.weather[0].description,
      iconCode: data.weather[0].icon,
      humidity: data.main.humidity,
    };
  } else {
    throw new Error("City not found please try again");
  }
}