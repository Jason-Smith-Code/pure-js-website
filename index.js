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
    "Light weight. ",
    "Interpreted. ",
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
    "instanceof : The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.",
  ],
  "// typeof \n" +
    "const word = 'some word' \n" +
    "console.log(typeof word) \n" +
    "returns 'string' \n \n" +
    "// instanceof \n" +
    "function Car(make, model, year) { \n" +
    `${tab}this.make = make; \n` +
    `${tab}this.model = model; \n` +
    `${tab}this.year = year; \n` +
    "} \n" +
    "const auto = new Car('Honda', 'Accord', 1998); \n \n" +
    "console.log(auto instanceof Car); \n" +
    "// expected output: true \n\n" +
    "console.log(auto instanceof Object); \n" +
    "// expected output: true \n"
);
const jsDataTypes = new contentConstructor(
  "data types",
  "#data-types",
  "data-types",
  "Javascript variables can hold diffent types of data listed below.",
  ["Number", "String", "Boolean", "Array", "Object", "Undefined", "Null"],
  "// Data types \n" +
    "const numberType = 1 \n" +
    "const stringType = 'String' \n" +
    "const booleanType = true \n" +
    "const arrayType = [] \n" +
    "const objectType = {} \n"
);
const jsFunctions = new contentConstructor(
  "functions",
  "#functions",
  "functions",
  "A JavaScript function is a block of code designed to perform a particular task. " +
    "Functions are one of the fundamental building blocks in JavaScript. " +
    "A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, " +
    "but for a procedure to qualify as a function, " +
    " it should take some input and return an output where there is some obvious relationship between the input and the output." +
    " To use a function, you must define it somewhere in the scope from which you wish to call it." +
    "Functions execute when they are invoked. There are several ways to write functions, and several types of functions. ",
  [
    "When a function reaches a return statement it will stop executing",
    "Can contain parameters",
    "Variables declared within a JavaScript function, become local to the function.",
  ],
  "// Function declaration \n" +
    "function square(number) { \n" +
    ` ${tab}return number * number; \n` +
    "} \n \n" +
    "// Function expression \n" +
    "const square = function(number) { return number * number } \n" +
    "var x = square(4) // x gets the value 16"
);
const jsLoops = new contentConstructor(
  "loops",
  "#loops",
  "loops",
  "There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. " +
    "(Note that it's possible that number could be zero!)" +
    "The various loop mechanisms offer different ways to determine the start and end points of the loop. " +
    "There are various situations that are more easily served by one type of loop over the others. " +
    "The statements for loops provided in JavaScript are:",
  [
    "for statement",
    "do...while statement",
    "while statement",
    "labeled statement",
    "break statement",
    "continue statement",
    "for...in statement",
    "for...of statement",
  ],
  "// Some code goes here"
);
const jsMaps = new contentConstructor(
  "maps",
  "#maps",
  "maps",
  "he Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.",
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
  "An array is a special variable, which can hold more than one value:",
  [
    "Arrays store any data types",
    "Arrays can be sorted",
    "Elements in an array can be added or removed",
  ],
  "// Array example \n" + "const cars = ['Saab', 'Volvo', 'BMW'];"
);
const jsEvents = new contentConstructor(
  "events",
  "#events",
  "events",
  "HTML events are things that happen to HTML elements. There are many events that can occur, here is a small list of some of the popular ones:",
  [
    "onchange : An HTML element has been changed",
    "onclick : The user clicks an HTML element",
    "onmouseover : The user moves the mouse over an HTML element",
    "onmouseout : The user moves the mouse away from an HTML element",
    "onkeydown : The user pushes a keyboard key",
    "onLoad : The browser has finished loading the page",
    "onsubmit : A form is submitted",
    "onchange : Occurs when the value of an element has been changed",
  ],
  "// Some code goes here"
);
const jsMath = new contentConstructor(
  "math",
  "#math",
  "math",
  "The JavaScript Math object allows you to perform mathematical tasks on numbers.",
  [
    "Unlike other objects, the Math object has no constructor.",
    "The Math object is static.",
    "All methods and properties can be used without creating a Math object first.",
  ],
  "Math.abs(x) // \n" +
    "Math.acos(x) //  \n" +
    "Math.acosh(x) // \n" +
    "Math.asin(x) // \n" +
    "Math.asinh(x) // \n" +
    "Math.atan(x) // \n" +
    "Math.atan2(y, x) // \n" +
    "Math.atanh(x) // \n" +
    "Math.ceil(x) // \n" +
    "Math.clz32(x) //  \n" +
    "Math.cos(x) // \n" +
    "Math.E //\n" +
    "Math.exp(x) // \n" +
    "Math.expm1(x) // \n" +
    "Math.floor(x) // \n" +
    "Math.fround(x) // \n" +
    "Math.LN2 // \n" +
    "Math.LN10 // \n" +
    "Math.log(x) // \n" +
    "Math.log10(x) // \n" +
    "Math.LOG10E // \n" +
    "Math.log1p(x) // \n" +
    "Math.log2(x) // \n" +
    "Math.LOG2E // \n" +
    "Math.max(x1,x2,..) // \n" +
    "Math.min(x1,x2,..) // \n" +
    "Math.PI // \n" +
    "Math.pow(x, y) // \n" +
    "Math.random() // \n" +
    "Math.round(x) // \n" +
    "Math.sign(x) // \n" +
    "Math.sin(x) // \n" +
    "Math.sinh(x) // \n" +
    "Math.sqrt(x) // \n" +
    "Math.SQRT1_2 // \n" +
    "Math.SQRT2 // \n" +
    "Math.tan(x) // \n" +
    "Math.tanh(x) // \n" +
    "Math.trunc(x) // \n"
);
const jsErrors = new contentConstructor(
  "errors",
  "#errors",
  "Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.",
  "",
  [
    "EvalError : Creates an instance representing an error that occurs regarding the global function eval()",
    "RangeError : Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.",
    "ReferenceError : Creates an instance representing an error that occurs when de-referencing an invalid reference.",
    "SyntaxError : Creates an instance representing a syntax error.",
    "TypeError : Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.",
    "URIError : Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.",
    "AggregateError : Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by Promise.any().",
    "InternalError : Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. 'too much recursion'.",
  ],
  ""
);
const jsScope = new contentConstructor(
  "scope",
  "#scope",
  "scope",
  "Scope determines the accessibility (visibility) of variables.",
  ["Block scope", "local scope", "Global scope"],
  "// Block scope \n \n" +
    "{ \n" +
    `${tab}let x = 2; \n` +
    "} \n" +
    "// x can NOT be used here \n \n" +
    "// Local scope \n \n" +
    "// code here can NOT use carName \n" +
    "function myFunction() { \n" +
    `${tab}let carName = "Volvo"; \n` +
    "// code here CAN use carName \n" +
    "} \n" +
    "// code here can NOT use carName \n \n" +
    "// Global scope \n" +
    'let carName = "Volvo"; \n' +
    "// code here can use carName \n" +
    "function myFunction() { \n" +
    `${tab}// code here can also use carName \n` +
    "}"
);
const jsHoisting = new contentConstructor(
  "hoisting",
  "#hoisting",
  "hoisting",
  "Hoisting is JavaScript's default behavior of moving declarations to the top." +
    "In JavaScript, a variable can be declared after it has been used. " +
    "In other words; a variable can be used before it has been declared.",
  [
    "Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope",
    "Variables defined with let and const are hoisted to the top of the block, but not initialized.",
    "Using a let variable before it is declared will result in a ReferenceError.",
    "JavaScript only hoists declarations, not initializations.",
  ],
  ""
);
const jsClasses = new contentConstructor(
  "classes",
  "#classes",
  "classes",
  "ECMAScript 2015, also known as ES6, introduced JavaScript Classes. " +
    "JavaScript Classes are templates for JavaScript Objects.",
  ["classes point 1", "classes point 2", "classes point 3"],
  "class ClassName { \n" +
    `${tab}constructor() { ... } \n` +
    "} \n \n" +
    "class Car { \n" +
    `${tab}constructor(name, year) { \n` +
    `${tab}${tab}this.name = name; \n` +
    `${tab}${tab}this.year = year; \n` +
    "} \n \n" +
    "let myCar1 = new Car('Ford', 2014);"
);
const jsModules = new contentConstructor(
  "modules",
  "#modules",
  "modules",
  "JavaScript modules allow you to break up your code into separate files making it easier to maintain the code-base.",
  [
    "JavaScript modules allow you to break up your code into separate files.",
    "JavaScript modules rely on the import and export statements.",
    "You can export a function or variable from any file",
    "You can create named exports two ways. In-line individually, or all at once at the bottom.",
    "You can only have one default export in a file.",
    "Named exports are constructed using curly braces. Default exports are not.",
  ],
  "// Named export \n" +
    "export const name = 'Jesse'; \n" +
    "export const age = 40; \n \n" +
    "const name = 'Jesse'; \n" +
    "const age = 40; \n" +
    "export {name, age}; \n \n" +
    "// Named import \n" +
    'import { name, age } from "./person.js";'
);
const jsJson = new contentConstructor(
  "json",
  "#json",
  "json",
  "JSON is a format for storing and transporting data.",
  [
    "JSON stands for JavaScript Object Notation",
    "JSON is a lightweight data interchange format",
    "JSON is language independent",
    "JSON is self-describing and easy to understand",
    "The JSON format is syntactically identical to the code for creating JavaScript objects.",
  ],
  "{ \n" +
    `${tab}"employees":[ \n` +
    `${tab}${tab}{"firstName":"John", "lastName":"Doe"}, \n` +
    `${tab}${tab}{"firstName":"Anna", "lastName":"Smith"}, \n` +
    `${tab}${tab}{"firstName":"Peter", "lastName":"Jones"} \n` +
    `${tab}]\n` +
    "}"
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
const strictMode = new contentConstructor(
  "strict mode",
  "#strict-mode",
  "strict-mode",
  "JavaScript's strict mode, introduced in ECMAScript 5," +
    "is a way to opt in to a restricted variant of JavaScript, " +
    "thereby implicitly opting-out of 'sloppy mode'. " +
    "Strict mode isn't just a subset: it intentionally has different semantics from normal code. " +
    "Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, " +
    "so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. " +
    "Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally. " +
    "Strict mode makes several changes to normal JavaScript semantics:",
  [
    "Eliminates some JavaScript silent errors by changing them to throw errors.",
    "Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.",
    "Prohibits some syntax likely to be defined in future versions of ECMAScript.",
  ],
  "// Whole-script strict mode syntax \n" +
    "'use strict'; \n" +
    "var v = 'Hi! I'm a strict mode script!';"
);
const jsFrameworks = new contentConstructor(
  "frameworks",
  "#frameworks",
  "frameworks",
  "JavaScript frameworks are an essential part of modern front-end web development, " +
    "providing developers with tried and tested tools for building scalable, " +
    "interactive web applications. Many modern companies use frameworks as a standard part of their tooling, " +
    "so many front-end development jobs now require framework experience. ",
  [
    "Why should I use a framework? What problems do they solve for me?",
    "What questions should I ask when trying to choose a framework? Do I even need to use a framework?",
    "What features do frameworks have? How do they work in general, and how do frameworks' implementations of these features differ?",
    "How do they relate to 'vanilla' JavaScript or HTML?",
  ],
  ""
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
  jsPerformance,
  strictMode,
  jsFrameworks
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
