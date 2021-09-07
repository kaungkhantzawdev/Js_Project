let data = document.getElementById("data");
let saveList = document.getElementById("data_btn");
let showData = document.getElementById("show_data");

let i = 1;

saveList.addEventListener("click", function (){
    // console.log(currentData);
    checkData(data.value);
    data.value = "";

})

function checkData(data){
    if (data){
        if (data.length >= 3){
           return  dataShow(data);
        }else {
            console.log("Minimum number must be three words.");
            return  alert("Minimum number must be three words.");
        }
    }else {
        console.log("Please fill data");
        return   alert("Please fill data");
    }
}

function upDate(d){
    let current = document.getElementById(`dataList${d}`).cells[1].innerHTML;
    // console.log(currentData);
    let data = prompt("Please change data", current);
     if(data){
         if (data.length >= 3){
             return document.getElementById(`dataList${d}`).cells[1].innerHTML = data ;
         }else {
             console.log("Minimum number must be three words.");
             return  alert("Minimum number must be three words.");
         }
     }else {
         console.log("Please fill data");
         return   alert("Please fill data");
     }

}

function dataShow(currentData){
    showData.innerHTML += `
          <tr id="dataList${i}">
                   <td>${i}</td>
                   <td>${currentData}</td>
                   <td><button class="btn-sm primary" id="update${i}" onclick="upDate(${i})">Update</button></td>
                   <td><button class="btn-sm danger" id="del${i}" onclick="Del(${i})">Delete</button></td>
          </tr>
    `;
    i++;
}


function Del(current){
    let x = document.getElementById(`dataList${current}`);

    let one = confirm(`Are you sure to delete "${x.cells[1].innerHTML}" `);
    if (one){
        showData.removeChild(x);
    }

}


data.addEventListener("keypress", function (e){
    if(e.keyCode === 13){
        checkData(data.value);
        data.value = "";
    }
})



