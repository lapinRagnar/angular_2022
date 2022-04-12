import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

import { TodoInterface } from 'src/app/todos/types/todo.interface';
import { FilterEnum } from 'src/app/todos/types/filter.enum';

@Injectable()
export class TodosService {

    // c'est une mauvaise facon de faire, mais normalement on creer une interface pour ca
    // todos$ = new BehaviorSubject([])        // BehaviorSubject, on peut le changer et faire un subscribe dessus

    // todos$: TodoInterface = new BehaviorSubject<TodoInterface[]>([]) 
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

}