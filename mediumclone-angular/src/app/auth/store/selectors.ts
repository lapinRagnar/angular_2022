import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthStateInterface } from './../types/auth.interface';
import { AppStateInterface } from './../../shared/types/appState.interface';

// export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth') // deprecié
export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
    authFeatureSelector, 
    (authState: AuthStateInterface) => authState.isSubmitting
)
