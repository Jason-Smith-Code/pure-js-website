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
const jsJavascript = new contentConstructor(
  "javascript",
  "#javascript",
  "This website is built with vanilla Javascript, from a single HTML file containing one element. " +
    "This site will contain bullet points for each aspect of Javascript. " +
    "I chose to build this to express my understanding of vanilla Javascript",
  [
    "World's most popular programming language. ",
    "The programming language of the Web. ",
    "Easy to learn. ",
    "Used to program the behavior of web pages and applications.",
    "All javascript files have a '.js' extention",
  ],
  ""
);
const jsHistory = new contentConstructor(
  "history",
  "#history",
  "JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997. " +
    "ECMAScript is the official name of the language. " +
    "ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6. " +
    "Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018)",
  [
    "Version ES1 : ECMAScript 1 (1997)",
    "Version ES2 : ECMAScript 2 (1998)",
    "Version ES3 : ECMAScript 3 (1999)",
    "Version ES4 : ECMAScript 4",
    "Version ES5 : ECMAScript 5 (2009)",
    "Version ES6 : ECMAScript 2015",
    "Version ES6 : ECMAScript 2016",
    "Version ES6 : ECMAScript 2017",
    "Version ES6 : ECMAScript 2018",
  ],
  ""
);
const jsInclude = new contentConstructor(
  "include",
  "#include",
  "There are several ways to include javascript into a website or application",
  [
    "Inserted directly into a HTML document using <script> Tags",
    "External Javascript files can be linked into a HTML document",
    "External Javascript resources can be linked into a HTML document",
  ],
  "// Inserted directly into document" +
    "\n" +
    "<script> Javascript goes here </script>" +
    "\n" +
    "\n" +
    "// External file" +
    "\n" +
    "<script src='script.js'></script>" +
    "\n" +
    "\n" +
    "// External resource" +
    "\n" +
    "<script src='https://www.exteral-location.com/js/script.js'></script>"
);
const jsOutput = new contentConstructor(
  "output",
  "#output",
  "JavaScript can display data in different ways:",
  [
    "Writing into an HTML element, using innerHTML.",
    "Writing into the HTML output using document.write()",
    "Writing into an alert box, using window.alert()",
    "Writing into the browser console, using console.log()",
  ],
  "// Using innerHTML" +
    "\n" +
    "document.getElementById('hello').innerHTML = 'Hello world';" +
    "\n\n" +
    "// Using document.write" +
    "\n" +
    "document.write('Hello world');" +
    "\n\n" +
    "// Using window.alert" +
    "\n" +
    "alert('Hello world');" +
    "\n\n" +
    "// Using console.log" +
    "\n" +
    "console.log('hello world')"
);
const jsStatements = new contentConstructor(
  "statements",
  "#statements",
  "A computer program is a list of 'instructions' to be 'executed' by a computer. " +
    "In a programming language, these programming instructions are called statements. " +
    " A JavaScript program is a list of programming statements.",
  [
    "JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.",
    "Semicolons separate JavaScript statements.",
    "When separated by semicolons, multiple statements on one line are allowed.",
  ],
  "// Example statement" + "\n" + "let variableName = 25 + 15;"
);
const jsSyntax = new contentConstructor(
  "syntax",
  "#syntax",
  "",
  ["Syntax point 1", "Syntax point 2", "Syntax point 3"],
  "// Some code goes here"
);
const jsComments = new contentConstructor(
  "comments",
  "#comments",
  "",
  ["Comment point 1", "Comment point 2", "Comment point 3"],
  "// Some code goes here"
);
const jsVariables = new contentConstructor(
  "variables",
  "#variables",
  "",
  ["Variable point 1", "Variable point 2", "Variable point 3"],
  "// Some code goes here"
);
const jsOperators = new contentConstructor(
  "operators",
  "#operators",
  "There are many types of operators listed below",
  [
    "Arithmetic Operators",
    "Assignment Operators",
    "String Operators",
    "Comparison Operators",
    "Logical Operators",
    "Type Operators",
    "Bitwise Operators",
  ],
  ""
);
const ArithmeticOp = new contentConstructor(
  "arithmetic operators",
  "#operators-operators",
  "There are many types of operators listed below",
  [
    "Arithmetic Operators",
    "Assignment Operators",
    "String Operators",
    "Comparison Operators",
    "Logical Operators",
    "Type Operators",
    "Bitwise Operators",
  ],
  ""
);
const jsDataTypes = new contentConstructor(
  "data types",
  "#data-types",
  "",
  ["Datatype point 1", "Datatype point 2", "Datatype point 3"],
  "// Some code goes here"
);
const jsLoops = new contentConstructor(
  "loops",
  "#loops",
  "",
  ["Loop point 1", "Loop point 2", "Loop point 3"],
  "// Some code goes here"
);
const jsMaps = new contentConstructor(
  "maps",
  "#maps",
  "",
  ["Map point 1", "Map point 2", "Map point 3"],
  "// Some code goes here"
);
const jsFunctions = new contentConstructor(
  "functions",
  "#functions",
  "",
  ["functions point 1", "functions point 2", "functions point 3"],
  "// Some code goes here"
);
const jsObjects = new contentConstructor(
  "objects",
  "#objects",
  "",
  ["objects point 1", "objects point 2", "objects point 3"],
  "// Some code goes here"
);
const jsArrays = new contentConstructor(
  "arrays",
  "#arrays",
  "",
  ["arrays point 1", "arrays point 2", "arrays point 3"],
  "// Some code goes here"
);
const jsEvents = new contentConstructor(
  "events",
  "#events",
  "",
  ["events point 1", "events point 2", "events point 3"],
  "// Some code goes here"
);
const jsMath = new contentConstructor(
  "math",
  "#math",
  "",
  ["math point 1", "math point 2", "math point 3"],
  "// Some code goes here"
);
const jsErrors = new contentConstructor(
  "errors",
  "#errors",
  "",
  ["errors point 1", "errors point 2", "errors point 3"],
  "// Some code goes here"
);
const jsScope = new contentConstructor(
  "scope",
  "#scope",
  "",
  ["scope point 1", "scope point 2", "scope point 3"],
  "// Some code goes here"
);
const jsHoisting = new contentConstructor(
  "hoisting",
  "#hoisting",
  "",
  ["hoisting point 1", "hoisting point 2", "hoisting point 3"],
  "// Some code goes here"
);
const jsClasses = new contentConstructor(
  "classes",
  "#classes",
  "",
  ["classes point 1", "classes point 2", "classes point 3"],
  "// Some code goes here"
);
const jsModules = new contentConstructor(
  "modules",
  "#modules",
  "",
  ["modules point 1", "modules point 2", "modules point 3"],
  "// Some code goes here"
);
const jsJson = new contentConstructor(
  "json",
  "#json",
  "",
  ["json point 1", "json point 2", "json point 3"],
  "// Some code goes here"
);
const jsStyle = new contentConstructor(
  "style",
  "#style",
  "",
  ["style point 1", "style point 2", "style point 3"],
  "// Some code goes here"
);
const jsPerformance = new contentConstructor(
  "performance",
  "#performance",
  "",
  ["Performance point 1", "Performance point 2", "Performance point 3"],
  "// Some code goes here"
);

// add menu items to an array so that I can iterate through them
// jsHistory and jsInclude are not appearing
contentArray.push(
  jsJavascript,
  jsHistory,
  jsInclude,
  jsOutput,
  jsStatements,
  jsSyntax,
  jsComments,
  jsVariables,
  jsOperators,
  ArithmeticOp,
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

// map through the contentArray to create a list of anchors for the side menu navigation
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

for (let i = 0; i < contentArray.length; i++) {
  console.log(contentArray[i].name);
  // create section for every item in array
  const section = document.createElement("section");
  // create the 3 content containers
  const textContainer = document.createElement("div");
  const bulletContainer = document.createElement("div");
  const codeContainer = document.createElement("div");
  // assign both a shared class and unique class to each container
  textContainer.classList.add("text-container", "content-container");
  bulletContainer.classList.add("bullet-container", "content-container");
  codeContainer.classList.add("code-container", "content-container");
  // append the section to the main container
  main.appendChild(section);
  // append the 3 content contains to the section
  section.appendChild(textContainer);
  section.appendChild(bulletContainer);
  section.appendChild(codeContainer);
  // create a heading for each section using topic name
  const heading = document.createElement("h2");
  heading.textContent = contentArray[i].name;
  textContainer.appendChild(heading);
  const text = document.createElement("p");
  text.innerText = contentArray[i].text;
  textContainer.appendChild(text);

  // add code content
  const code = document.createElement("code");
  code.innerText = contentArray[i].code;
  codeContainer.appendChild(code);

  // Create the bullet point items
  // create list container
  const ul = document.createElement("ul");
  bulletContainer.appendChild(ul);
  // iterate through bulletpoint array
  contentArray[i].bulletPoints.forEach((element) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = element;
  });
}
