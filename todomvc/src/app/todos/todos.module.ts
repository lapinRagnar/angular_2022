import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodosComponent } from 'src/app/todos/components/todos.component';

const routes: Routes = [
    {path: '', component: TodosComponent}
]

@NgModule({
    declarations: [TodosComponent],
    imports: [RouterModule.forChild(routes)]
})
export class TodosModule {

}