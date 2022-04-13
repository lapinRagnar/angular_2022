import { map } from 'rxjs/operators';
import { Component, Input } from "@angular/core";
import { Observable } from 'rxjs';


import { TodosService } from 'src/app/todos/services/todos.service';



@Component({
    selector: 'app-todos-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    noTodosClass$: Observable<boolean>
    activeCount$: Observable<number>
    itemsLeftText$: Observable<string>


    constructor(private todoService: TodosService){

        this.activeCount$ = this.todoService.todos$.pipe(
            map((todos) => todos.filter(todo => !todo.isCompleted).length)
        )

        this.itemsLeftText$ = this.activeCount$.pipe(
            map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left `)
        )
        
        this.noTodosClass$ = this.todoService.todos$.pipe(
            map((todos => todos.length === 0))
        )
    }
    

}