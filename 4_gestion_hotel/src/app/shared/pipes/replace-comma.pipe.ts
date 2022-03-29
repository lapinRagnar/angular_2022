import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceComma',
})
export class ReplaceComma implements PipeTransform {
    transform(value: string): string {
        
        if (!!value) {          // si la valeur n'est ni null et undefined
            return value.replace(/,/g, '.')
        } else
        {
            return ''
        }
    }
}