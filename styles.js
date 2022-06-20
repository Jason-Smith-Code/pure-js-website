// Colours
const jsYellow = "#F6F200";
const darkYellow = "#ADAA02";
const grey = "#151514";

// Font
const fontTags = "p, a, span, h1, h2, h3, h4, h5, h6";
const font = document.querySelectorAll(fontTags);
for (let i = 0; i < font.length; i++) {
  font[i].style.fontFamily = "Arial";
  font[i].style.textTransform = "capitalize";
}

// Content
const headerElement = document.getElementsByTagName("header");
const content = document.getElementById("website");
const section = document.getElementsByTagName("section");
const sideNavUl = document.getElementById("side-ul");
const sideNavLinks = document.getElementsByClassName("side-link");
// hover link

const sideNavLi = document.getElementsByClassName("side-nav-list-item");
// Responsive optimisation

if (window.innerWidth > 0) {
  // content layout
  content.style.display = "flex";
  content.style.flexDirection = "column";

  // header
  headerElement[0].style.backgroundColor = "black";
  headerElement[0].style.width = "200px";

  // Side Navigation List items
  for (let i = 0; i < sideNavLi.length; i++) {
    sideNavLi[i].style.padding = "10px 20px";
  }
  // Side Navigation Links
  for (let i = 0; i < sideNavLinks.length; i++) {
    sideNavLinks[i].style.textDecoration = "none";
    sideNavLinks[i].style.color = "white";
    sideNavLinks[i].style.transition = "all 250ms";
    sideNavLinks[i].addEventListener("mouseenter", function () {
      sideNavLinks[i].style.borderLeft = "15px solid " + jsYellow;
      sideNavLinks[i].style.paddingLeft = "5px";
    });

    sideNavLinks[i].addEventListener("mouseleave", function () {
      sideNavLinks[i].style.borderLeft = "0px solid" + jsYellow;
      sideNavLinks[i].style.paddingLeft = "0px";
    });
  }
  sideNavUl.style.listStyle = "none";
  sideNavUl.style.padding = "0";
  // Main
  const main = document.getElementsByTagName("main");
  const mainWidth = window.innerWidth - 200;
  main[0].style.width = mainWidth + "px";
  // Sections
  for (let i = 0; i < section.length; i++) {
    section[i].style.padding = "100px 20px";
  }
}

if (window.innerWidth > 600) {
}

if (window.innerWidth > 720) {
}

if (window.innerWidth > 1000) {
  // content layout
  content.style.flexDirection = "row";
}

if (window.innerWidth > 1200) {
}
