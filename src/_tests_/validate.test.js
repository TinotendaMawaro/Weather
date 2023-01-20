import validateInput from "../modules/utils/validate.js";

test("should return true", () => {
  expect(validateInput("tokyo")).toBeTruthy();
});

test("should return true", () => {
  expect(validateInput("")).toBeFalsy();
});