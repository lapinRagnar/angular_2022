import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { TodoInterface } from 'src/app/todos/types/todo.interface';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

    @Input('todo') todoProps: TodoInterface = <TodoInterface>{}
    @Input('isEditing') isEditingProps: boolean = false
    @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> = new EventEmitter()
    
    editingText: string = ""

    constructor(private todosService: TodosService) {

    }

    ngOnInit():void {
        this.editingText = this.todoProps.text
    }

    setTodoInEditMode(): void {

        console.log("setTodoInEditMode");
        this.setEditingIdEvent.emit(this.todoProps.id)
        
    }

    removeTodo(): void {
        console.log("remove todo");
        this.todosService.removeTodo(this.todoProps.id)
        
    }

    toggleTodo(): void {
        console.log("quand on change - on toggle");
        
    }

    changeText(event: Event): void{
        console.log("changer le text");
        const value = (event.target as HTMLInputElement).value
        this.editingText = value
        
    }

    changeTodo(): void {
        console.log(" changer le todo", this.editingText)
        this.todosService.changeTodo(this.todoProps.id, this.editingText)
        this.setEditingIdEvent.emit(null)
    }

}