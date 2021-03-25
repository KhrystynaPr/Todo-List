
function addNewTask() {
    let todo = document.getElementById("add-task"); // те, що ми отримуємо з input
    let elem = ` 
        <div class="task">  
            <input type="checkbox" class="my-checkbox" onchange="completeTask(this)">
            <span class="my-task">` + todo.value + `</span>
            <button type="button" onclick="removeTask(this)">Remove</button>
        </div>
    `;                                                                      // завдання, яке ми додаємо
    if (todo.value.trim() !== "") {
        document.getElementById("tasks").innerHTML += elem;
    }
    todo.value = "";
    countUpdate();                   // рахуємо кількість доданих task
}

function countUpdate() {
   let count = document.getElementsByClassName("task").length;
    console.log(count);
    document.getElementById("count").innerHTML = `
    <p> Tasks for today : ` + count + `</p>`;
}

function removeTask(elem) {
    elem.parentNode.remove();
    countUpdate();                      // рахуємо кількість task після видалення
}


function completeTask(e) {
    if (e.checked) {
        e.parentNode.classList.add("completed-task");
    } else{
        e.parentNode.classList.remove("completed-task");
    }
}

function completeAll(e) {
    let check = document.getElementsByClassName("my-checkbox");
    if (e.checked) {
        changeArrCheckbox(check, true);
        return
    }
    changeArrCheckbox(check, false);
}

function changeArrCheckbox(check, val) {
    for (let i = 0; i < check.length; i++) {
        check[i].checked = val;
        completeTask(check[i]);
    }
}