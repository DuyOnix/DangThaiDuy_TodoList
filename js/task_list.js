function TaskList() {
    this.arr = [];
    this.searchIndex = function (id) {
        return this.arr.findIndex(function (item, index) {
            return id === item.id;
        })
    }
    this.addTask = function (task) {
        this.arr.push(task);
    }
    this.deleteTask = function (id) {
        var idx = this.searchIndex(id);
        if (idx !== -1)
            this.arr.splice(idx, 1);
    }
    this.getTaskById = function (id) {
        var idx = this.searchIndex(id);
        if (idx !== -1)
            return this.arr[idx];
    }
    this.updateTask = function (staff) {
        var idx = this.searchIndex(staff.id);
        if (idx !== -1)
            this.arr[idx] = staff;
    }
}