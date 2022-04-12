import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodosComponent } from 'src/app/todos/components/todos.component';
import { HeaderComponent } from 'src/app/todos/components/header/header.component';
import { TodosService } from 'src/app/todos/services/todos.service';
import { MainComponent } from 'src/app/todos/components/main/main.component';
import { TodoComponent } from 'src/app/todos/components/todo/todo.component';

const routes: Routes = [
    {path: '', component: TodosComponent}
]

@NgModule({
    declarations: [TodosComponent, HeaderComponent, MainComponent, TodoComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    providers: [TodosService]
})
export class TodosModule {

}