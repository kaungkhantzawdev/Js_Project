let idOne = document.getElementById("one");
let idTwo = document.getElementById("two");
let idThree = document.getElementById("three");
let idFour = document.getElementById("four");
let idFive = document.getElementById("five");
let idSix = document.getElementById("six");
let idSeven = document.getElementById("seven");
let idEight = document.getElementById("eight");

let pho = document.getElementById("pho");

let i = 1;


function pod(x){
    // alert(idOne);
    x.style.display = "none";
    x.innerHTML += `
         <audio src="vendor/H8FUYP6-casual-tap.mp3" autoplay></audio>
    `;
    check();
}

function check(){

    if(idEight.style.display == "none" && idOne.style.display == "none"){
        pho.style.display = "block";
        pho.innerHTML += `
             <audio src="vendor/QUFP6TB-you-win.mp3"  autoplay></audio>
        `;
    }
}