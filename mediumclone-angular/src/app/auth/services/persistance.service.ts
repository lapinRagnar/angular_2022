import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {

    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (e)
        {
            console.error('erreur de sauvegarde dans localstorage ', e)
        }
    }

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key) || '{}')
        } catch (e)
        {
            console.error("Erreur qui vient de localStorage ", e)
            return null
        }
    }

}
