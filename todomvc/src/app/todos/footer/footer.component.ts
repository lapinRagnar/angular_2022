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

    constructor(private todoService: TodosService){
        
        this.noTodosClass$ = this.todoService.todos$.pipe(
            map((todos => todos.length === 0))
        )
    }
    

}