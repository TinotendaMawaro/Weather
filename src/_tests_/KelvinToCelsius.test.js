import kelvinToCelsius from "../modules/utils/kelvinToCelsius.js";

test("converts to 25°C", () => {
  expect(kelvinToCelsius(298.15)).toBe("25°C");
});

test("converts to 28°C", () => {
  expect(kelvinToCelsius(301.15)).toBe("28°C");
});