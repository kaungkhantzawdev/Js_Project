let bulb = document.getElementById("bulb");
let on = document.getElementById("on");
let off = document.getElementById("off");
let main = document.getElementById("main");

on.addEventListener("click",function (){
    bulb.src = "img/on.png";
    main.classList.add("main_on");
    main.classList.remove("main");

})

off.addEventListener("click",function (){
    bulb.src = "img/off.png";
    main.classList.remove("main_on");
    main.classList.add("main");
})