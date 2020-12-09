class ToDo
{
    private todoName:string;
    private isCompleted:boolean;
    private todoCompletionDate:Date;

    public createToDo(todoName:string,isCompleted:boolean,todoCompletionDate:Date)
    {

        if (todoName.length <=0)
        {
            console.log('invalid todoname')

        }
        if(todoCompletionDate>new Date())
        {
            console.log('invalid completion date');
        }
        this.todoName = todoName;
        this.isCompleted = isCompleted;
        this.todoCompletionDate=todoCompletionDate;
    }

    public  displayToDo():string
    {
        return `todo name: ${this.todoName} todo completion date: ${this.todoCompletionDate}
         completed? ${this.isCompleted}`
    }
}

let todo = new ToDo();
todo.createToDo('',true,new Date());
console.log(todo.displayToDo());
