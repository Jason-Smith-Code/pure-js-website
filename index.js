// Header
const header = document.createElement("header");

// Header Logo
const logoImage = document.createElement("img");
const logoLocation = "./images/javascript-logo.png";
logoImage.setAttribute("src", logoLocation);
logoImage.setAttribute("alt", "logo");
logoImage.setAttribute("height", 100);
logoImage.setAttribute("width", 100);
logoImage.setAttribute("id", "logo");

// Header Menu
const desktopNav = document.createElement("nav");
desktopNav.setAttribute("id", "side-nav");
const sideMenuUl = document.createElement("ul");
sideMenuUl.setAttribute("id", "side-ul");
desktopNav.appendChild(sideMenuUl);
// Navgation items object constructor
function MenuConstructor(name, location) {
  this.name = name;
  this.location = location;
}
// navigation items
let navigationArray = [];
const jsAbout = new MenuConstructor("about", "#about");
const jsHistory = new MenuConstructor("history", "#history");
const jsOutput = new MenuConstructor("output", "#output");
const jsSyntax = new MenuConstructor("syntax", "#syntax");
const jsVariables = new MenuConstructor("variables", "#variables");
const jsOperators = new MenuConstructor("operators", "#operators");
const jsDataTypes = new MenuConstructor("data types", "#data-types");
const jsStatements = new MenuConstructor("statements", "#statements");
const jsLoops = new MenuConstructor("loops", "#loops");
const jsMaps = new MenuConstructor("maps", "#maps");
const jsComments = new MenuConstructor("comments", "#comments");
const jsFunctions = new MenuConstructor("functions", "#functions");
const jsObjects = new MenuConstructor("objects", "#objects");
const jsArrays = new MenuConstructor("arrays", "#arrays");
const jsEvents = new MenuConstructor("events", "#events");
const jsMath = new MenuConstructor("math", "#math");
const jsErrors = new MenuConstructor("errors", "#errors");
const jsScope = new MenuConstructor("scope", "#scope");
const jsHoisting = new MenuConstructor("hoisting", "#hoisting");
const jsClasses = new MenuConstructor("classes", "#classes");
const jsModules = new MenuConstructor("modules", "#modules");
const jsJson = new MenuConstructor("json", "#json");
const jsStyle = new MenuConstructor("style", "#style");
const jsPerformance = new MenuConstructor("performance", "#performance");

// add menu items to nav array
navigationArray.push(
  jsAbout,
  jsHistory,
  jsOutput,
  jsSyntax,
  jsVariables,
  jsOperators,
  jsDataTypes,
  jsStatements,
  jsLoops,
  jsMaps,
  jsComments,
  jsFunctions,
  jsObjects,
  jsArrays,
  jsEvents,
  jsMath,
  jsErrors,
  jsScope,
  jsHoisting,
  jsClasses,
  jsModules,
  jsJson,
  jsStyle,
  jsPerformance
);

// map through the array and a list of anchors
navigationArray.map((item) => {
  let sideMenuListItem = document.createElement("li");
  sideMenuListItem.setAttribute("class", "side-nav-list-item");
  sideMenuUl.appendChild(sideMenuListItem);
  let a = document.createElement("a");
  a.setAttribute("class", "side-link");
  sideMenuListItem.appendChild(a);
  a.innerHTML = item.name;
  a.setAttribute("href", item.location);
});

const website = document.getElementById("website");
website.appendChild(header);
header.appendChild(logoImage);
header.appendChild(desktopNav);

const main = document.createElement("main");
website.appendChild(main);

// map through the list creating sections for each topic
navigationArray.map((topic) => {
  const topicSection = document.createElement("section");
  topicSection.setAttribute("id", topic.name);
  const topicTitle = document.createElement("h2");
  main.appendChild(topicSection);
  topicTitle.innerHTML = topic.name;
  topicSection.appendChild(topicTitle);
});

// About Section
const aboutSection = document.getElementById("about");
// About content
const abouttextElement = document.createElement("p");
abouttextElement.innerHTML =
  "JavaScript is the world's most popular programming language. " +
  "JavaScript is the programming language of the Web. " +
  "JavaScript is easy to learn. " +
  "This tutorial will teach you JavaScript from basic to advanced.";
aboutSection.appendChild(abouttextElement);
