import extractData from "../modules/weatherData.js";

// mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        name: "tokyo",
        sys: {
          country: "JP",
        },
        main: {
          temp: 204,
          feels_like: 206,
          humidity: "80%",
        },
        weather: [
          {
            description: "broken clouds",
            icon: "03d",
          },
        ],
      }),
  })
);

test("returns data object", () => {
  extractData("tokyo").then((data) =>
    expect(data).toEqual({
      city: "tokyo",
      country: "JP",
      description: "broken clouds",
      feelsLike: 206,
      humidity: "80%",
      iconCode: "03d",
      temp: 204,
    })
  );
});