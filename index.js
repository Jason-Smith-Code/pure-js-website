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
function contentConstructor(name, location, text, bulletPoints, code) {
  this.name = name;
  this.location = location;
  this.text = text;
  this.bulletPoints = bulletPoints;
  this.code = code;
}
// navigation items
let contentArray = [];
const jsIntro = new contentConstructor(
  "intro",
  "#intro",
  "This website is built with vanilla Javascript, from a single HTML file containing one element. " +
    "This site will contain bullet points for each aspect of Javascript. " +
    "I chose to build this to express my understanding of vanilla Javascript",
  "",
  ""
);
const jsAbout = new contentConstructor(
  "about",
  "#about",
  "",
  [
    "JavaScript is the world's most popular programming language. ",
    "JavaScript is the programming language of the Web. ",
    "JavaScript is easy to learn. ",
    "JavaScript is used to program the behavior of web pages and applications.",
  ],
  ""
);
const jsInclude = new contentConstructor("include", "#include", "", "", "");
const jsHistory = new contentConstructor("history", "#history", "", "", "");
const jsOutput = new contentConstructor("output", "#output", "", "", "");
const jsStatements = new contentConstructor(
  "statements",
  "#statements",
  "",
  "",
  ""
);
const jsSyntax = new contentConstructor("syntax", "#syntax", "", "", "");
const jsComments = new contentConstructor("comments", "#comments", "", "", "");
const jsVariables = new contentConstructor(
  "variables",
  "#variables",
  "",
  "",
  ""
);
const jsOperators = new contentConstructor(
  "operators",
  "#operators",
  "",
  "",
  ""
);
const jsDataTypes = new contentConstructor(
  "data types",
  "#data-types",
  "",
  "",
  ""
);
const jsLoops = new contentConstructor("loops", "#loops", "", "", "");
const jsMaps = new contentConstructor("maps", "#maps", "", "", "");
const jsFunctions = new contentConstructor(
  "functions",
  "#functions",
  "",
  "",
  ""
);
const jsObjects = new contentConstructor("objects", "#objects", "", "", "");
const jsArrays = new contentConstructor("arrays", "#arrays", "", "", "");
const jsEvents = new contentConstructor("events", "#events", "", "", "");
const jsMath = new contentConstructor("math", "#math", "", "", "");
const jsErrors = new contentConstructor("errors", "#errors", "", "", "");
const jsScope = new contentConstructor("scope", "#scope", "", "", "");
const jsHoisting = new contentConstructor("hoisting", "#hoisting", "", "", "");
const jsClasses = new contentConstructor("classes", "#classes", "", "", "");
const jsModules = new contentConstructor("modules", "#modules", "", "", "");
const jsJson = new contentConstructor("json", "#json", "", "", "");
const jsStyle = new contentConstructor("style", "#style", "", "", "");
const jsPerformance = new contentConstructor(
  "performance",
  "#performance",
  "",
  "",
  ""
);

// add menu items to an array so that I can iterate through them
contentArray.push(
  jsIntro,
  jsAbout,
  jsHistory,
  jsInclude,
  jsOutput,
  jsStatements,
  jsSyntax,
  jsComments,
  jsVariables,
  jsOperators,
  jsDataTypes,
  jsLoops,
  jsMaps,
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
contentArray.map((item) => {
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
// Create 3 containers for each section to separate the type of content, text, bullet points, code
contentArray.map((topic) => {
  const topicSection = document.createElement("section");
  topicSection.setAttribute("id", topic.name);
  const topicText = document.createElement("div");
  const topicBullet = document.createElement("div");
  const topicCode = document.createElement("div");
  topicText.setAttribute("class", "content-container");
  topicBullet.setAttribute("class", "content-container");
  topicCode.setAttribute("class", "content-container");
  main.appendChild(topicSection);
  topicSection.appendChild(topicText);
  topicSection.appendChild(topicBullet);
  topicSection.appendChild(topicCode);
  const topicTitle = document.createElement("h2");
  topicTitle.innerHTML = topic.name;
  topicText.appendChild(topicTitle);
});

// Intro Section
const introSection = document.getElementById("intro");
const introText = document.createElement("p");
introText.innerText =
  "This website is built with vanilla Javascript, from a single HTML file containing one element. " +
  "This site will contain bullet points for each aspect of Javascript. " +
  "I chose to build this to express my understanding of vanilla Javascript";
introSection.appendChild(introText);

// About Section
const aboutSection = document.getElementById("about");
// About content
const aboutUl = document.createElement("ul");
aboutSection.appendChild(aboutUl);
const aboutBulletPoints = [
  "JavaScript is the world's most popular programming language. ",
  "JavaScript is the programming language of the Web. ",
  "JavaScript is easy to learn. ",
  "JavaScript is used to program the behavior of web pages and applications.",
];
for (let i = 0; i < aboutBulletPoints.length; i++) {
  const aboutLi = document.createElement("li");
  aboutLi.appendChild(document.createTextNode(aboutBulletPoints[i]));
  aboutUl.appendChild(aboutLi);
}

// History Section
const historySection = document.getElementById("history");
// History content
const historyUl = document.createElement("ul");
historySection.appendChild(historyUl);
const historyBulletPoints = [
  "JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.",
  "ECMAScript is the official name of the language.",
  "ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.",
  "Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018).",
];

for (let i = 0; i < historyBulletPoints.length; i++) {
  const historyLi = document.createElement("li");
  historyLi.appendChild(document.createTextNode(historyBulletPoints[i]));
  historyUl.appendChild(historyLi);
}

// Include Section
const includeSection = document.getElementById("include");
// Include content
const includeUl = document.createElement("ul");
includeSection.appendChild(includeUl);
const includeBulletPoints = [
  "JavaScript can be inserted as an external file into the head or body of a HTML document",
  "JavaScript can be inserted as a script into the body of a HTML document",
];

for (let i = 0; i < includeBulletPoints.length; i++) {
  const includeLi = document.createElement("li");
  includeLi.appendChild(document.createTextNode(includeBulletPoints[i]));
  includeUl.appendChild(includeLi);
}

// Output Section
const outputSection = document.getElementById("output");
// Output content
const outputUl = document.createElement("ul");
outputSection.appendChild(outputUl);
const outputBulletPoints = [
  "Javascript can display data by writing into the HTML element using innerHTML",
  "Javascript can display data by writing into the HTML output using document.write()",
  "Javascript can display data by writing into an alert box using window.alert()",
  "Javascript can display data by writing into brower console using console.log()",
];

for (let i = 0; i < outputBulletPoints.length; i++) {
  const outputLi = document.createElement("li");
  outputLi.appendChild(document.createTextNode(outputBulletPoints[i]));
  outputUl.appendChild(outputLi);
}

// Statements Section
const statementsSection = document.getElementById("statements");
// Statements content
const statementsUl = document.createElement("ul");
statementsSection.appendChild(statementsUl);
const statementsBulletPoints = [
  "JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.",
  "The statements are executed, one by one, in the same order as they are written",
  "Semicolons separate JavaScript statements.",
];

for (let i = 0; i < statementsBulletPoints.length; i++) {
  const statementsLi = document.createElement("li");
  statementsLi.appendChild(document.createTextNode(statementsBulletPoints[i]));
  statementsUl.appendChild(statementsLi);
}

// Syntax Section
const syntaxSection = document.getElementById("syntax");
// Syntax content
const syntaxsUl = document.createElement("ul");
syntaxSection.appendChild(syntaxsUl);
const syntaxBulletPoints = [
  "JavaScript syntax is the set of rules, how JavaScript programs are constructed.",
  "The JavaScript syntax defines two types of values, fixed values, and variable values",
  "Fixed values are literals",
  "Variable values are variables",
];

for (let i = 0; i < syntaxBulletPoints.length; i++) {
  const syntaxLi = document.createElement("li");
  syntaxLi.appendChild(document.createTextNode(syntaxBulletPoints[i]));
  syntaxsUl.appendChild(syntaxLi);
}

// Comments Section
const commentsSection = document.getElementById("comments");
// Comments content
const commentsUl = document.createElement("ul");
commentsSection.appendChild(commentsUl);
const commentsBulletPoints = [
  "JavaScript syntax is the set of rules, how JavaScript programs are constructed.",
  "The JavaScript syntax defines two types of values, fixed values, and variable values",
  "Fixed values are literals",
  "Variable values are variables",
];

for (let i = 0; i < commentsBulletPoints.length; i++) {
  const commentsLi = document.createElement("li");
  commentsLi.appendChild(document.createTextNode(commentsBulletPoints[i]));
  commentsUl.appendChild(commentsLi);
}

// Try to eliminate repetition

for (let i = 0; i < contentArray.length; i++) {
  // create section for every item in array
  const section = document.createElement("section");
  // create the 3 content containers
  const sectionText = document.createElement("div");
  const sectionBullet = document.createElement("div");
  const sectionCode = document.createElement("div");
  // assign a class to each div
  sectionText.setAttribute("class", "content-container");
  sectionBullet.setAttribute("class", "content-container");
  sectionCode.setAttribute("class", "content-container");
  // append the section to the main container
  main.appendChild(section);
  // append the 3 content contains to the section
  section.appendChild(sectionText);
  section.appendChild(sectionBullet);
  section.appendChild(sectionCode);
  // create a heading for each section using topic name
  const heading = document.createElement("h2");
  heading.textContent = contentArray[i].name;
  sectionText.appendChild(heading);
  const text = document.createElement("p");
  text.innerText = contentArray[i].text;
  sectionText.appendChild(text);
  // Create the bullet point items
  // create list container
  const ul = document.createElement("ul");
  sectionBullet.appendChild(ul);
  // iterate through bulletpoint array
  for (let b = 0; b < contentArray[i].bulletPoints.length; i++) {
    contentArray[i].bulletPoints.forEach((element) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = element;
    });
  }
}
