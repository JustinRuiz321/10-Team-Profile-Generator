const Intern = require("../lib/intern.js");

test("Can set school via constructor", () => {
  const test = "RUTGERS Bootcamp";
  const j = new Intern("Foo", 1, "test@test.com", test);
  expect(j.internSchool).toBe(test);
});

test("getRole() should return \"Intern\"", () => {
  const test = "Intern";
  const j = new Intern("Foo", 1, "test@test.com", "RUTGERS Bootcamp");
  expect(j.getRole()).toBe(test);
});

test("Can get school via getSchool()", () => {
  const test = "RUTGERS Bootcamp";
  const j = new Intern("Foo", 1, "test@test.com", test);
  expect(j.getSchool()).toBe(test);
});