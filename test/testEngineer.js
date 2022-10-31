const Engineer = require("../lib/engineer.js");

test("Can set GitHUb account via constructor", () => {
  const test = "GitHubUser";
  const j = new Engineer("Foo", 1, "test@test.com", test);
  expect(j.engineerGithub).toBe(test);
});

test("getRole() should return \"engineer\"", () => {
  const test = "engineer";
  const j = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(j.getRole()).toBe(test);
});

test("Can get GitHub username via getGithub()", () => {
  const test = "GitHubUser";
  const j = new Engineer("Foo", 1, "test@test.com", test);
  expect(j.getGithub()).toBe(test);
});