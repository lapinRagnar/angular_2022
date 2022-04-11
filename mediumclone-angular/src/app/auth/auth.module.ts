import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects"

import { RegisterComponent } from "../components/register/register.component";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';

const routes = [
    {path: 'register', component: RegisterComponent}
]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect])
    ],
    declarations: [RegisterComponent],
    providers: [AuthService]
})
export class AuthModule {}