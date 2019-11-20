import {
  getMonthName,
  getTodoDateFormat,
  getFirstThreeDayCharacters
} from "../../utils/dateUtil";

describe("Date Util", () => {
  test("checks getMonthName", () => {
    const dt = new Date("2019-11-11");
    expect(getMonthName(dt)).toEqual("November");
  });

  test("checks getTodoDateFormat", () => {
    const dt = new Date("2019-11-11");
    expect(getTodoDateFormat(dt)).toBe("Mon 11 November");
  });

  test("checks getFirstThreeDayCharacters", () => {
    const dt = new Date("2019-11-11");
    expect(getFirstThreeDayCharacters(dt)).toBe("Mon");
  });
});
