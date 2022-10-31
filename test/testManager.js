const Manager = require("../lib/manager.js");

test("Can set office number via constructor argument", () => {
  const test = 321;
  const j = new Manager("Foo", 1, "test@test.com", test);
  expect(j.managerOffice).toBe(test);
});

test("getRole() should return \"Manager\"", () => {
  const test = "Manager";
  const j = new Manager("Foo", 1, "test@test.com", 321);
  expect(j.getRole()).toBe(test);
});

test("Can get office number via getOffice()", () => {
  const test = 321;
  const j = new Manager("Foo", 1, "test@test.com", test);
  expect(j.getOfficeNumber()).toBe(test);
});