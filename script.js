let para = document.getElementById("one");
para.innerHTML = "hello";

let demo = document.getElementById("demo");
let ban = document.getElementsByClassName("banner");

/* for (const element of ban) {
  demo.innerHTML = element;
} */

let eles = document.querySelectorAll(".ranked-list");
let output = "";
for (let i = 0; i < eles.length; i++) {
  output += eles[i].innerHTML + "<br>";
}
demo.innerHTML = output; 
