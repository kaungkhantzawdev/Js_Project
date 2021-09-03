let writeText = document.getElementById("word");
let saveBtn =document.getElementById("saveBtn");
let listData = document.getElementById("listData");
// let btnDel = document.getElementById("btnDel");
// let btnEdit = document.getElementById("btnEdit");
let i = 1;

function showData(data){
    console.log(i);
   listData.innerHTML +=  `
                 <li class="list_item" id="list_item${i}" >
                        <span class="list_num" id="list_num${i}">${i}</span>
                        <p class="list_text" id="list_text${i}"> ${data}</p>
                        <button class="btn btn_del" id="btnDel" onclick="delBtn(${i})">Delete</button>
                        <button class="btn btn_edit" id="btnEdit" onclick="editBtn(${i})">Edit</button>
                </li>
    `;

    i++;
}

function btnSave (){
    let x = writeText.value;

    if (x){
        if(x.length >= 3){
            showData(x);

        }else {
            alert("Please must write more than three words");
            console.log("Please must write more than three words");
        }
    }else {
        alert("Please fill Data more than three words.");
        console.log("Please fill Data more than three words.");
    }

    writeText.value = "";
}



writeText.addEventListener("keyup", function (x){
   if (x.key === "Enter"){
       btnSave();
   }

})

function delBtn(data){
     let x = document.getElementById(`list_item${data}`);
     let currentText = document.getElementById(`list_text${data}`).innerHTML;
     let y = confirm(`Are you Sure to delete ${currentText}`);
     if (y){
         listData.removeChild(x);
     }
}

function editBtn(data){
    let currentText = document.getElementById(`list_text${data}`).innerHTML;
    let getData= prompt(`Please edit ${currentText}`, currentText);

    if (getData){
        if(getData.length >= 3){
            document.getElementById(`list_text${data}`).innerHTML = getData;

        }else {
            alert("Please must write more than three words");
            console.log("Please must write more than three words");
        }
    }else {
        alert("Please fill Data more than three words.");
        console.log("Please fill Data more than three words.");
    }

}




