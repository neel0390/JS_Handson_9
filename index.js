// Q.1
document.getElementById("text");

// // Q.2
document.getElementsByTagName("h1");

// // Q.3
document.getElementsByClassName("box");

// Q.4
document.querySelector("h1").innerText = "hello World";

// Q.5
const btn = document.querySelector(".button");
const row_button = document.querySelector(".row-button");

btn.addEventListener("click", () => {
  let row = document.querySelector(".flex-container");
  row.style.flexDirection = "column";
});

row_button.addEventListener("click", () => {
  let row = document.querySelector(".flex-container");
  row.style.flexDirection = "row";
});

// Q.6
// The document object represent a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document.

// document.method_name;

// The document object represent a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document

// window.property_name;

// Q.7
const heading = document.querySelector("h1");
heading.style.color = "red";
heading.setAttribute("id", "heading");

// Q.8
document.querySelector("#change-btn").addEventListener("click", () => {
  heading.innerText = "Welcome to Elevation Academy";
});

// Q.9

setInterval(() => {
  const date = new Date();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const dateSection = hrs < 12 ? "AM" : "PM";

  document.querySelector("#hrs").innerHTML = ` ${dateSection}: ${hrs}  hrs `;
  document.querySelector("#min").innerHTML = `${min}  min `;
  document.querySelector("#sec").innerHTML = `${sec}  sec `;
}, 1000);

// Q.10
document.addEventListener("change", () => {
  const year = document.querySelector("#year").value;
  console.log(year);
});
