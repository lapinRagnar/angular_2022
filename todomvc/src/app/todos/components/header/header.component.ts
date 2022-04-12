import { Component } from "@angular/core";

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    text: string = ""

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement
        console.log(target.value)
        this.text = target.value
    }

    addTodo():void {
        console.log('ajouter todo ', this.text);
        
    }

}