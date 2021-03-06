import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";

import { TodoInterface } from 'src/app/todos/types/todo.interface';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit, OnChanges {

    @Input('todo') todoProps: TodoInterface = <TodoInterface>{}
    @Input('isEditing') isEditingProps: boolean = false
    @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> = new EventEmitter()
    
    editingText: string = ""

    @ViewChild('textInput') textInput!: ElementRef

    constructor(private todosService: TodosService) {

    }

    ngOnInit():void {
        this.editingText = this.todoProps.text
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changemenet ', changes);
        if (changes['isEditingProps'].currentValue) {

            setTimeout(() => {
                this.textInput.nativeElement.focus()
            }, 0);
        }
        
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
        this.todosService.toggleTodo(this.todoProps.id)
        
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