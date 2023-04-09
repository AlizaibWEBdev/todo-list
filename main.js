function fetchTodo() {
  let data = localStorage.getItem("todos");
  let chek = JSON.parse(data);
  console.log(chek);
  if (data == null || chek.length < 1) {
    document.getElementById("todos").innerHTML = `
    <h1>no todo found please add todo </h1>
    `;
  } else {
    document.getElementById("todos").innerHTML = "";
    data = JSON.parse(data);
    data.map((element, index) => {
      document.getElementById("todos").innerHTML += `
      <div class="todo">
            <p>${element}</p>
            <div>
            <button onclick="X(${index})">X</button>
            <button  onclick="eidt(${index})">eidt</button>
            </div>

        </div>
      
      `;
    });
  }
}
fetchTodo();
function add() {
  let cruntDdata = document.getElementById("todo").value;
  document.getElementById("todo").value = "";

  let oldData = localStorage.getItem("todos");
  if (oldData == null) {
    let arr = [cruntDdata];
    localStorage.setItem("todos", JSON.stringify(arr));
  } else {
    oldData = JSON.parse(oldData);
    let newData = [...oldData, cruntDdata];
    localStorage.setItem("todos", JSON.stringify(newData));
  }
  fetchTodo();
}

function X(indextoNotAdd) {
  let arr = JSON.parse(localStorage.getItem("todos"));
  let newarr = [];
  arr.map((element, index) => {
    if (index == indextoNotAdd) {
      console.log("dleleted", element);
    } else {
      newarr.push(element);
    }
  });

  localStorage.setItem("todos", JSON.stringify(newarr));

  fetchTodo();
}

function eidt(indexTOedit) {
  let arr = JSON.parse(localStorage.getItem("todos"));
  let newarr = [];

  arr.map((element, index) => {
    if (index == indexTOedit) {
        let eidted = prompt("what to add");

      newarr.push(eidted);
     
    } else {
      newarr.push(element);
    }
  });

  
  localStorage.setItem("todos", JSON.stringify(newarr));

  fetchTodo();
}
