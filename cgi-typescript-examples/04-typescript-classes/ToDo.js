var ToDo = /** @class */ (function () {
    function ToDo() {
    }
    ToDo.prototype.createToDo = function (todoName, isCompleted, todoCompletionDate) {
        if (todoName.length <= 0) {
            console.log('invalid todoname');
        }
        if (todoCompletionDate > new Date()) {
            console.log('invalid completion date');
        }
        this.todoName = todoName;
        this.isCompleted = isCompleted;
        this.todoCompletionDate = todoCompletionDate;
    };
    ToDo.prototype.displayToDo = function () {
        return "todo name: " + this.todoName + " todo completion date: " + this.todoCompletionDate + "\n         completed? " + this.isCompleted;
    };
    return ToDo;
}());
var todo = new ToDo();
todo.createToDo('', true, new Date());
console.log(todo.displayToDo());
