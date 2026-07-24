import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Simon Ohler",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["I have never used CI/CD before."],
    // Which CI/CD tools do you use in your project?
    tools: "None so far",
    // What do you want to learn in this workshop?
    expectations: ["I want to get an overview over what CI/CD means, some tooling, etc."],
  },
});
