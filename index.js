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
function contentConstructor(name, location, anchor, text, bulletPoints, code) {
  this.name = name;
  this.location = location;
  this.anchor = anchor;
  this.text = text;
  this.bulletPoints = bulletPoints;
  this.code = code;
}
// Content
const tab = "\u2003";
let contentArray = [];
const jsJavascript = new contentConstructor(
  "javascript",
  "#javascript",
  "javascript",
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
  "history",
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
  "include",
  "There are several ways to include javascript into a website or application",
  [
    "Inserted directly into a HTML document using <script> Tags",
    "External Javascript files can be linked into a HTML document",
    "External Javascript resources can be linked into a HTML document",
  ],
  "// Inserted directly into document  \n" +
    "<script> Javascript goes here </script> \n \n" +
    "// External file \n" +
    "<script src='script.js'></script> \n \n" +
    "// External resource \n" +
    "<script src='https://www.exteral-location.com/js/script.js'></script>"
);
const jsOutput = new contentConstructor(
  "output",
  "#output",
  "output",
  "JavaScript can display data in different ways:",
  [
    "Writing into an HTML element, using innerHTML.",
    "Writing into the HTML output using document.write()",
    "Writing into an alert box, using window.alert()",
    "Writing into the browser console, using console.log()",
  ],
  "// Using innerHTML \n" +
    "document.getElementById('hello').innerHTML = 'Hello world'; \n \n" +
    "// Using document.write \n" +
    "document.write('Hello world'); \n \n" +
    "// Using window.alert \n" +
    "alert('Hello world'); \n \n" +
    "// Using console.log \n" +
    "console.log('hello world')"
);
const jsStatements = new contentConstructor(
  "statements",
  "#statements",
  "statements",
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
  "syntax",
  "JavaScript syntax is the set of rules, how JavaScript programs are constructed.",
  [
    "The JavaScript syntax defines two types of values: Fixed and Variable",
    "Fixed values are called Literals.",
    "Variable values are called Variables.",
    "Numbers are written with or without decimals",
    "Strings are text, written within double or single quotes",
  ],
  "'single quote string'" + "\n \n" + '"double quote string"'
);
const jsComments = new contentConstructor(
  "comments",
  "#comments",
  "comments",
  "It's great to use comments for planning, explaining and preventing the execution of code. " +
    "They can help when more than one person is working on a script, " +
    "or if you find yourself revisting old code it may help to read comments first to get a quick understanding. ",
  [
    "Comments can be used to explain JavaScript code, and to make it more readable.",
    "Comments can also be used to prevent execution, when testing alternative code.",
    "Comments can be used to plan out complex tasks into smaller steps.",
  ],
  "// This is a single line comment" +
    "\n \n" +
    "/*" +
    "\n" +
    `${tab} This is ` +
    "\n" +
    `${tab} a multi-line` +
    "\n" +
    `${tab} comment` +
    "\n" +
    "*/"
);
const jsVariables = new contentConstructor(
  "variables",
  "#variables",
  "variables",
  "In a programming language, variables are used to store data values. " +
    "JavaScript uses the keywords var, let and const to declare variables. " +
    "An equal sign is used to assign values to variables.",
  [
    "Variables are containers for storing data (storing data values).",
    "Use const to declare a variable which won't change",
    "Use let to declare a variable which is expected to change",
    "Use var to declare variables if the javascript version is 1995 to 2015",
    "All variables must be identified with a unique name",
  ],
  "// Declaring variables \n" + "let x; \n" + "const y; \n" + "var z; \n"
);
const jsLet = new contentConstructor(
  "let",
  "#let",
  "let",
  "The let keyword was introduced in ES6 (2015).",
  [
    "Cannot be redeclared.",
    "Must be declared before use.",
    "Have block scope.",
  ],
  "// Cannot be redeclared \n" +
    "let x = 5; \n" +
    "let x = 0; \n" +
    "SyntaxError: 'x' has already been declared \n \n" +
    "// Must be declared before use. \n" +
    "let x; \n" +
    "x can be used now \n \n" +
    "// Have block scope. \n" +
    "{ \n" +
    `${tab} let x = 2; \n` +
    "} \n"
);
const jsConst = new contentConstructor(
  "const",
  "#const",
  "const",
  "The const keyword was introduced in ES6 (2015).",
  [
    "Cannot be redeclared.",
    "Must be declared before use.",
    "Have block scope.",
    "always declare a variable with const unless you know that the value will change.",
    "Use const when you declare: a new Array, a new Object, a new Function, a new RegExp",
  ],
  "// Cannot be redeclared \n" +
    "const x = 5; \n" +
    "const x = 0; \n" +
    "SyntaxError: 'x' has already been declared \n \n" +
    "// Must be declared before use. \n" +
    "const x; \n" +
    "x can be used now \n \n" +
    "// Have block scope. \n" +
    "{ \n" +
    `${tab} const x = 2; \n` +
    "} \n"
);
const jsOperators = new contentConstructor(
  "operators",
  "#operators",
  "operators",
  "There are many types of operators listed below",
  [
    "Arithmetic Operators",
    "Assignment Operators",
    "Comparison Operators",
    "Logical Operators",
    "Type Operators",
    "Bitwise Operators",
  ],
  ""
);
const ArithmeticOp = new contentConstructor(
  "arithmetic operators",
  "#arithmetic-operators",
  "arithmetic-operators",
  "The arithmetic operators are listed below",
  [
    "+ : Addition",
    "- : Subtract",
    "* : Multiplication",
    "** : Exponentiation (ES2016)",
    "/ : Division",
    "% : Modulus (Remainder)",
    "++ : Increment",
    "-- : Decrement",
  ],
  ""
);
const assignmentOp = new contentConstructor(
  "assignment operators",
  "#assignment-operators",
  "assignment-operators",
  "The assignment operators are listed below",
  [
    "= : assigns a value to a variable.",
    "+= : adds a value to a variable",
    "-= : subtracts a value from a variable",
    "*= : multiplies a variable",
    "/= : divides a variable",
    "%= : assigns a remainder to a variable",
  ],
  ""
);
const comparisonOp = new contentConstructor(
  "comparison operators",
  "#comparison-operators",
  "comparison-operators",
  "The comparison operators are listed below",
  [
    "== : equal to.",
    "=== : equal value and equal type",
    "!= : not equal",
    "!== : not equal value or not equal type",
    "> : greater than",
    "< : less than",
    ">= : greater than or equal to",
    "<= : less than or equal to",
    "? : ternary operator",
  ],
  ""
);
const logicalOp = new contentConstructor(
  "logical operators",
  "#logical-operators",
  "logical-operators",
  "The logical operators are listed below, they return a boolean.",
  ["&& : logical and", "|| : logical or", "! : logical not"],
  ""
);
const typeOp = new contentConstructor(
  "type operator",
  "#type-operator",
  "type-operator",
  "The data type operators are listed below",
  [
    "typeof : Returns the type of a variable",
    "instanceof : Returns true if an object is an instance of an object type",
  ],
  "// Some code goes here"
);
const jsDataTypes = new contentConstructor(
  "data types",
  "#data-types",
  "data-types",
  "Javascript variables can hold diffent types of data listed below.",
  ["Number", "String", "Boolean", "Array", "Object", "Undefined", "Null"],
  ""
);
const jsFunctions = new contentConstructor(
  "functions",
  "#functions",
  "functions",
  "A JavaScript function is a block of code designed to perform a particular task. " +
    "Functions execute when they are invoked. There are several ways to write functions, and several types of functions. ",
  [
    "When a function reaches a return statement it will stop executing",
    "Can contain parameters",
    "Variables declared within a JavaScript function, become local to the function.",
  ],
  "// Some code goes here"
);
const jsLoops = new contentConstructor(
  "loops",
  "#loops",
  "loops",
  "Loops allow us to iterate through",
  ["Loop point 1", "Loop point 2", "Loop point 3"],
  "// Some code goes here"
);
const jsMaps = new contentConstructor(
  "maps",
  "#maps",
  "maps",
  "",
  ["Map point 1", "Map point 2", "Map point 3"],
  "// Some code goes here"
);
const jsObjects = new contentConstructor(
  "objects",
  "#objects",
  "objects",
  "",
  ["objects point 1", "objects point 2", "objects point 3"],
  "// Some code goes here"
);
const jsArrays = new contentConstructor(
  "arrays",
  "#arrays",
  "arrays",
  "",
  ["arrays point 1", "arrays point 2", "arrays point 3"],
  "// Some code goes here"
);
const jsEvents = new contentConstructor(
  "events",
  "#events",
  "events",
  "",
  ["events point 1", "events point 2", "events point 3"],
  "// Some code goes here"
);
const jsMath = new contentConstructor(
  "math",
  "#math",
  "math",
  "",
  ["math point 1", "math point 2", "math point 3"],
  "// Some code goes here"
);
const jsErrors = new contentConstructor(
  "errors",
  "#errors",
  "errors",
  "",
  ["errors point 1", "errors point 2", "errors point 3"],
  "// Some code goes here"
);
const jsScope = new contentConstructor(
  "scope",
  "#scope",
  "scope",
  "",
  ["scope point 1", "scope point 2", "scope point 3"],
  "// Some code goes here"
);
const jsHoisting = new contentConstructor(
  "hoisting",
  "#hoisting",
  "hoisting",
  "",
  ["hoisting point 1", "hoisting point 2", "hoisting point 3"],
  "// Some code goes here"
);
const jsClasses = new contentConstructor(
  "classes",
  "#classes",
  "classes",
  "",
  ["classes point 1", "classes point 2", "classes point 3"],
  "// Some code goes here"
);
const jsModules = new contentConstructor(
  "modules",
  "#modules",
  "modules",
  "",
  ["modules point 1", "modules point 2", "modules point 3"],
  "// Some code goes here"
);
const jsJson = new contentConstructor(
  "json",
  "#json",
  "json",
  "",
  ["json point 1", "json point 2", "json point 3"],
  "// Some code goes here"
);
const jsStyle = new contentConstructor(
  "style",
  "#style",
  "style",
  "",
  ["style point 1", "style point 2", "style point 3"],
  "// Some code goes here"
);
const jsPerformance = new contentConstructor(
  "performance",
  "#performance",
  "performance",
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
  jsLet,
  jsConst,
  jsOperators,
  ArithmeticOp,
  assignmentOp,
  comparisonOp,
  logicalOp,
  typeOp,
  jsDataTypes,
  jsFunctions,
  jsLoops,
  jsMaps,
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
  section.setAttribute("id", contentArray[i].anchor);
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
