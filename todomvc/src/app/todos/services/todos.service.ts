import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

import { TodoInterface } from 'src/app/todos/types/todo.interface';
import { FilterEnum } from 'src/app/todos/types/filter.enum';

@Injectable()
export class TodosService {


    todos$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]) 

    filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

    addTodo(text: string): void {  

        const newTodo: TodoInterface = {
            text,
            isCompleted: false,
            id: Math.random().toString(),
        }

        const updatedTodos = [...this.todos$.getValue(), newTodo]
        this.todos$.next(updatedTodos)
    }

    toggleAll(isCompleted: boolean): void {

        
        const updatedTodos = this.todos$.getValue().map(todo => {
            return {
                ...todo, 
                isCompleted
            }
        })

        this.todos$.next(updatedTodos)
        
    }

    changeFilter(filterName: FilterEnum): void {
        this.filter$.next(filterName)
    }

}