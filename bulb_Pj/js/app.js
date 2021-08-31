let bulb = document.getElementById("bulb");
// let on = document.getElementById("on");
// let off = document.getElementById("off");
let main = document.getElementById("main");
let control = document.getElementById("btn_update");
let control_item = document.getElementById("btn_update_item");

// on.addEventListener("click",function (){
//     bulb.src = "img/on.png";
//     main.classList.add("main_on");
//     main.classList.remove("main");
//
// })
//
// off.addEventListener("click",function (){
//     bulb.src = "img/off.png";
//     main.classList.remove("main_on");
//     main.classList.add("main");
// })


control_item.addEventListener("click", function (){
    let item_bulb = bulb.src.split("/");
    let last_item =item_bulb[ item_bulb.length-1];
        // console.log(last_item);
    if(last_item === "off.png"){
        bulb.src = "img/on.png";
        console.log("light");
        main.classList.add("main_on");
        main.classList.remove("main");
        control.classList.add("update_light");
        control.classList.remove("btn_update");
        control_item.classList.add("update_light_item");
        control_item.classList.remove("btn_update_item");

    }else {
        bulb.src = "img/off.png";
        console.log("Dark");
        main.classList.remove("main_on");
        main.classList.add("main");
        control.classList.remove("update_light");
        control.classList.add("btn_update");
        control_item.classList.remove("update_light_item");
        control_item.classList.add("btn_update_item");
    }
})

