let res = document.getElementById("result");
let text = document.getElementById("text");
let color = document.getElementById("color");
let font = document.getElementById("font");

text.addEventListener("change", function (){
   res.innerHTML = text.value;
})

color.addEventListener("change", function (){
    res.style.color = color.value;
})

font.addEventListener("change", function (){
    res.style.fontSize = font.value + "px";
})