function Task(_taskName, _status) {
    this.id = Math.floor(Math.random() * 100) + 1;
    this.taskName = _taskName;
    this.status = _status;
}

