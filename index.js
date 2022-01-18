// .getElementById()
// .getElementsByClassName()
// .getElementsByTagName()

// console.log("getElementById", document.getElementById("cat"));

// let catDiv = document.getElementById("cat");
// console.log("getElementById", catDiv);

// let mouseDiv = document.getElementsByClassName("mouse");
// console.log("getElementsByClassName", mouseDiv);
//even with just one element, it still returns htmlCollection

// let helloDiv = document.getElementsByClassName("hello");
// console.log("getElementsByClassName", helloDiv);

// let allDivs = document.getElementsByTagName("div");
// console.log("getElementsByTagName", allDivs);

// .querySelector()
// .querySelectorAll()

// let catQuery = document.querySelector("#cat");
// console.log("Query selector", catQuery);

// let query = document.querySelector(".hello");
// console.log("Query selector", query);

// let query = document.querySelector(".mouse");
// console.log("Query selector", query);

// let queryAll = document.querySelectorAll("div");
// console.log("Query selector", queryAll);

// console.log("getElementById", document.getElementById("cat"));

let catDiv = document.getElementById("cat");

catDiv.innerHTML = "This is the cat div";
catDiv.style.backgroundColor = "red";
catDiv.style.color = "blue";

console.log("getElementById", catDiv);
