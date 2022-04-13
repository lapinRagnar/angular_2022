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

    changeTodo(id: string, text: string): void {

        const updatedTodos = this.todos$.getValue().map(todo => {
            
            if (todo.id === id) {
                return {
                    ...todo,
                    text
                }
            }
            return todo
        })

        this.todos$.next(updatedTodos)

    }

    removeTodo(id: string): void {

        const updatedTodos = this.todos$.getValue().filter(todo => todo.id !== id)
        this.todos$.next(updatedTodos)
    }

}