const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Number 1 a <p> with red text that says "Hey I'm red"
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

container.appendChild(p);

// Number 2 an <h3> with blue text that says "I'm a blue h3"
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3";

container.appendChild(h3);

/* 
Number 3 a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/
const div3 = document.createElement("div");
div3.style.backgroundColor = "pink";
div3.style.border = "2px solid black";

container.appendChild(div3)

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

div3.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

div3.appendChild(p2);
