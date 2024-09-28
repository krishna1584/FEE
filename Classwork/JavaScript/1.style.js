var heading = document.querySelector("h1");
console.log(heading.classList);

//1. Adding Class: classlist add()

heading.classList.add("abc");
heading.classList.add("pink");

heading.classList.remove("pink");
console.log(heading.classList);