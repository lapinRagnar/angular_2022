import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable, combineLatest, of, forkJoin, BehaviorSubject } from 'rxjs';

import { TodoInterface } from 'src/app/todos/types/todo.interface';
import { FilterEnum } from './../../types/filter.enum';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html'
})
export class MainComponent {

    visibleTodos$: Observable<any>
    noTodoClass$: Observable<boolean>
    isAllTodosSelected$: Observable<any>

    constructor(private todosService: TodosService) {

        this.isAllTodosSelected$ = this.todosService.todos$.pipe(
            map((todos) => todos.every(todo => todo.isCompleted))
        )

        this.noTodoClass$ = this.todosService.todos$.pipe(
            map((todos => todos.length === 0))
        )

        this.visibleTodos$ = combineLatest<[TodoInterface[], FilterEnum]>([this.todosService.todos$, this.todosService.filter$])  
        .pipe(
            map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
                
                console.log('mikambana ', todos, filter)

                if (filter === FilterEnum.active) {
                    return todos.filter(todo => !todo.isCompleted)
                } else if (filter === FilterEnum.completed) {
                    return todos.filter(todo => !todo.isCompleted)
                }

                return todos
            })
        )
    }
}