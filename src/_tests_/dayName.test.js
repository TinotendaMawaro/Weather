import getDayName from "../modules/utils/dayName.js";

test("returns sunday", () => {
  expect(getDayName(0)).toBe("sunday");
});

test("returns tuesday", () => {
  expect(getDayName(2)).toBe("tuesday");
});

test("returns saturday", () => {
  expect(getDayName(6)).toBe("saturday");
});