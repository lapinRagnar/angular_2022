import { TodoInterface } from 'src/app/todos/types/todo.interface';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {

    @Input('todo') todoProps: TodoInterface = <TodoInterface>{}
    

}