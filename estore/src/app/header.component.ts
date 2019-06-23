import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'pro-header',
    template: `
        <header (click)="handleClick()">
            <h1>Hello {{message}}</h1>
        </header>
    
    `
})
export class HeaderComponent {
    @Input()
    message = 'Angular'

    @Output()
    headerClicked: EventEmitter<string> = new EventEmitter();

    handleClick() {
        this.headerClicked.emit("header clicked")
    }
}   