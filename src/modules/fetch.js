export default function fetchData(city) {
    const response = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=65d28aebd5d245543976976de029f9a3`,
      { mode: "cors" }
    );
    return response;
  }