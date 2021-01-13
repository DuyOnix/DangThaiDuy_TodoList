var taskList = new TaskList();
var validation = new Validation();
getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

getEle("addItem").addEventListener("click", function () {
    var taskName = getEle("newTask").value;
    var isValid = validation.checkValid(taskName, "notiInput", "(*) Vui lòng nhập task") &&
        validation.checkExist(taskName, "notiInput", "(*) Task đã có trong danh sách", taskList.arr);
    if (!isValid) return;
    var task = new Task(taskName, "todo");
    taskList.addTask(task);
    createTable(taskList.arr, "todo");
    setLocalStorage();

});

function createTable(arr, ulId) {
    var content = "";
    arr.forEach(function (item, index) {
        content += `
        <li>
            <span>${item.taskName}</span>
            <div class="buttons">
                <button class="remove" onclick="deleteToDo(${item.id})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="changeStatus(${item.id})">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
        </li>
        `
    })
    getEle(ulId).innerHTML = content;
}

function setLocalStorage() {
    var arr = JSON.stringify(taskList.arr);
    localStorage.setItem("Task List", arr);
}

function getLocalStorage() {
    if (localStorage.getItem("Task List")) {
        taskList.arr = JSON.parse(localStorage.getItem("Task List"));
        createTable(taskList.arr, "todo");
    }
}

function deleteToDo(id) {
    taskList.deleteTask(id);
    createTable(taskList.arr, "todo");
    setLocalStorage();
}



