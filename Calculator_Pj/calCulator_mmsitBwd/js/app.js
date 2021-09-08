let ac = document.getElementById("ac");
let c = document.getElementById("c");
let m = document.getElementById("modulus");
let n = document.getElementById("nine");
let e = document.getElementById("eight");
let s = document.getElementById("seven");
let i = document.getElementById("six");
let f = document.getElementById("five");
let fo = document.getElementById("four");
let t = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let z = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let time = document.getElementById("time");
let equal = document.getElementById("equal");
let dot = document.getElementById("dot");
let divide = document.getElementById("divide");

let mode = document.getElementById("mode");
let mode_item = document.getElementById("mode_item");
let box = document.getElementById("box");
let calculate = document.getElementById("calculate");

let textBox = document.getElementById("textBox");

mode.addEventListener("click", function (){
    //mode toggle
    mode.classList.toggle("light");
    mode.classList.toggle("dark");
    mode_item.classList.toggle("fa-moon");
    mode_item.classList.toggle("fa-sun");

    //box toggle
    box.classList.toggle("box");
    box.classList.toggle("dark_box");

    //calculate box
    calculate.classList.toggle("calculator_box");
    calculate.classList.toggle("dark_cal");

    //btn toggle
    const {classList} = ac;
    classList.toggle("btn");
    classList.toggle("dark_btn");
    classList.toggle("one");
    classList.toggle("dark_one");

    const {classList: classList1} = c;
    classList1.toggle("btn");
    classList1.toggle("dark_btn");
    classList1.toggle("one");
    classList1.toggle("dark_one");

    const {classList: classList2} = m;
   classList2.toggle("btn");
   classList2.toggle("dark_btn");
   classList2.toggle("one");
   classList2.toggle("dark_one");

    const {classList: classList3} = n;
    classList3.toggle("btn");
    classList3.toggle("dark_btn");


    const {classList: classList4} = e;
    classList4.toggle("btn");
    classList4.toggle("dark_btn");

    const {classList: classList5} = s;
    classList5.toggle("btn");
    classList5.toggle("dark_btn");


    const {classList: classList6} = i;
    classList6.toggle("btn");
    classList6.toggle("dark_btn");


    const {classList: classList7} = f;
    classList7.toggle("btn");
    classList7.toggle("dark_btn");


    const {classList: classList8} = fo;
    classList8.toggle("btn");
    classList8.toggle("dark_btn");


    const {classList: classList9} = t;
    classList9.toggle("btn");
    classList9.toggle("dark_btn");

    const {classList: classList10} = two;
    classList10.toggle("btn");
    classList10.toggle("dark_btn");


    const {classList: classList11} = one;
    classList11.toggle("btn");
    classList11.toggle("dark_btn");

    const {classList: classList12} = z;
    classList12.toggle("btn");
    classList12.toggle("dark_btn");


    const {classList: classList13} = plus ;
    classList13.toggle("btn");
    classList13.toggle("dark_btn");


    const {classList: classList14} = minus;
    classList14.toggle("btn");
    classList14.toggle("dark_btn");


    const {classList: classList15} = time;
    classList15.toggle("btn");
    classList15.toggle("dark_btn");


    const {classList: classList16} = equal;
    classList16.toggle("btn");
    classList16.toggle("dark_btn");


    const {classList: classList17} = dot;
    classList17.toggle("btn");
    classList17.toggle("dark_btn");


    const {classList: classList18} = divide;
    classList18.toggle("btn");
    classList18.toggle("dark_btn");


});

function calText(data){
    textBox.innerHTML += data;
}

