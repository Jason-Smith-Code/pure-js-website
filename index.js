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
  "// Some code goes here"
);
const jsInclude = new contentConstructor(
  "include",
  "#include",
  "",
  "",
  "// Some code goes here"
);
const jsHistory = new contentConstructor(
  "history",
  "#history",
  "",
  "",
  "// Some code goes here"
);
const jsOutput = new contentConstructor(
  "output",
  "#output",
  "",
  "",
  "// Some code goes here"
);
const jsStatements = new contentConstructor(
  "statements",
  "#statements",
  "",
  "",
  "// Some code goes here"
);
const jsSyntax = new contentConstructor(
  "syntax",
  "#syntax",
  "",
  "",
  "// Some code goes here"
);
const jsComments = new contentConstructor(
  "comments",
  "#comments",
  "",
  "",
  "// Some code goes here"
);
const jsVariables = new contentConstructor(
  "variables",
  "#variables",
  "",
  "",
  "// Some code goes here"
);
const jsOperators = new contentConstructor(
  "operators",
  "#operators",
  "",
  "",
  "// Some code goes here"
);
const jsDataTypes = new contentConstructor(
  "data types",
  "#data-types",
  "",
  "",
  "// Some code goes here"
);
const jsLoops = new contentConstructor(
  "loops",
  "#loops",
  "",
  "",
  "// Some code goes here"
);
const jsMaps = new contentConstructor(
  "maps",
  "#maps",
  "",
  "",
  "// Some code goes here"
);
const jsFunctions = new contentConstructor(
  "functions",
  "#functions",
  "",
  "",
  "// Some code goes here"
);
const jsObjects = new contentConstructor(
  "objects",
  "#objects",
  "",
  "",
  "// Some code goes here"
);
const jsArrays = new contentConstructor(
  "arrays",
  "#arrays",
  "",
  "",
  "// Some code goes here"
);
const jsEvents = new contentConstructor(
  "events",
  "#events",
  "",
  "",
  "// Some code goes here"
);
const jsMath = new contentConstructor(
  "math",
  "#math",
  "",
  "",
  "// Some code goes here"
);
const jsErrors = new contentConstructor(
  "errors",
  "#errors",
  "",
  "",
  "// Some code goes here"
);
const jsScope = new contentConstructor(
  "scope",
  "#scope",
  "",
  "",
  "// Some code goes here"
);
const jsHoisting = new contentConstructor(
  "hoisting",
  "#hoisting",
  "",
  "",
  "// Some code goes here"
);
const jsClasses = new contentConstructor(
  "classes",
  "#classes",
  "",
  "",
  "// Some code goes here"
);
const jsModules = new contentConstructor(
  "modules",
  "#modules",
  "",
  "",
  "// Some code goes here"
);
const jsJson = new contentConstructor(
  "json",
  "#json",
  "",
  "",
  "// Some code goes here"
);
const jsStyle = new contentConstructor(
  "style",
  "#style",
  "",
  "",
  "// Some code goes here"
);
const jsPerformance = new contentConstructor(
  "performance",
  "#performance",
  "",
  "",
  "// Some code goes here"
);

// add menu items to an array so that I can iterate through them
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
  for (let b = 0; b < contentArray[i].bulletPoints.length; i++) {
    contentArray[i].bulletPoints.forEach((element) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = element;
    });
  }
}
