import { rowData } from "./data.js";
const mainWrapperDiv = document.createElement("div");
const body = document.querySelector("body");
const header = document.createElement("header");
const navBar = document.createElement("nav");
const main = document.createElement("main");
const headerSpan = document.createElement("span");
headerSpan.setAttribute("id", "headerSpan");
headerSpan.innerText = "Wpisz slowo aby wyswietlił sie dzwiek";
const headerButtonsDiv = document.createElement("div");
const searchDiv = document.createElement("div");
const menuList = document.createElement("ul");
searchDiv.setAttribute("id", "searchContainer");
headerButtonsDiv.innerText = "Right Buttons";
headerButtonsDiv.setAttribute("id", "headerButtonsDiv");
mainWrapperDiv.className = "mainWrapper";
body.appendChild(mainWrapperDiv);
mainWrapperDiv.appendChild(header);
header.append(headerSpan, headerButtonsDiv);
mainWrapperDiv.appendChild(navBar);

navBar.appendChild(menuList);
for (let key in rowData) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${key}`;
  link.textContent = key;
  listItem.appendChild(link);
  menuList.appendChild(listItem);
}
mainWrapperDiv.appendChild(main);
main.appendChild(searchDiv);
