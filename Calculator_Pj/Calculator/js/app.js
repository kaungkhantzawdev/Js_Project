let result = document.getElementById("result");
let fName = document.getElementById("fName");
let sName = document.getElementById("sName");
let operator = document.getElementById("operator");
let cal = document.getElementById("calculate");
let det = document.getElementById("delete");


cal.addEventListener("click", function (){
    let calOne = parseInt(fName.value);
    let calTwo = parseInt(sName.value);
    let op = operator.value;

   if(op === "add" ){
       return  result.innerHTML = calOne + calTwo ;
   }else if(op === "minus"){
       return  result.innerHTML = calOne - calTwo ;
   }else if(op === "multi"){
       return  result.innerHTML = calOne * calTwo ;
   }else if(op === "divide"){
       return  result.innerHTML = calOne / calTwo ;
   }else if(op === "modulus"){
       return  result.innerHTML = calOne % calTwo ;
   }else {
       return  result.innerHTML = "please fill data fully" ;

   }

});

det.addEventListener("click", function (){
    fName.value = "";
    sName.value = "";
    result.innerHTML = "0.00";
    operator.value = "default";

})