let data = document.getElementById("data");
let saveList = document.getElementById("data_btn");
let showData = document.getElementById("show_data");

let update = document.getElementById("update");
let del = document.getElementById("del");

saveList.addEventListener("click", function (){
    let currentData = data.value;
    console.log(currentData);
    showData.innerHTML = `
          <tr>
                   <td>${currentData}</td>
                   <td><button class="btn-sm primary" id="update" onclick="upDate()">Update</button></td>
                   <td><button class="btn-sm danger" id="del" onclick="Del()">Delete</button></td>
          </tr>
    `;
})

function upDate(){
   let x = prompt("Write Data");
    showData.innerHTML = `
          <tr>
                   <td>${x}</td>
                   <td><button class="btn-sm primary" id="update" onclick="upDate()">Update</button></td>
                   <td><button class="btn-sm danger" id="del">Delete</button></td>
          </tr>
    `;
}

function Del(){
    let x = window.confirm("Are you sure");
    console.log(x);

    if (x === true){
        showData.innerHTML = "";
    }else {
        let currentData = data.value;
        console.log(currentData);
        showData.innerHTML = `
          <tr>
                   <td>${currentData}</td>
                   <td><button class="btn-sm primary" id="update" onclick="upDate()">Update</button></td>
                   <td><button class="btn-sm danger" id="del" onclick="Del()">Delete</button></td>
          </tr>
    `;
    }

}

