// Header
const header = document.createElement("header");

// Header Logo
const logoImage = document.createElement("img");
const logoLocation = "./images/javascript-logo.png";
logoImage.setAttribute("src", logoLocation);
logoImage.setAttribute("alt", "logo");
logoImage.setAttribute("height", 100);
logoImage.setAttribute("width", 100);

// Header Menu
const desktopNav = document.createElement("nav");
const desktopUl = document.createElement("ul");
desktopNav.appendChild(desktopUl);
// Navgation items object constructor
function MenuConstructor(name, location) {
  this.name = name;
  this.location = location;
}
// navigation items
let navigationArray = [];
const jsAbout = new MenuConstructor("about", "./about");
const jsVariables = new MenuConstructor("variables", "./variables");
const jsStatements = new MenuConstructor("statements", "./statements");
const jsComments = new MenuConstructor("comments", "./comments");
// add menu items to nav array
navigationArray.push(jsAbout, jsVariables, jsStatements, jsComments);
// map through the array and create anchors for each item
navigationArray.map((item) => {
  let desktopItem = document.createElement("li");
  desktopUl.appendChild(desktopItem);
  let a = document.createElement("a");
  desktopItem.appendChild(a);
  a.innerHTML = item.name;
  a.setAttribute("href", item.location);
});

const website = document.getElementById("website");
website.appendChild(header);
header.appendChild(logoImage);
header.appendChild(desktopNav);
