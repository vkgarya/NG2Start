import { Component } from '@angular/core';

@Component({
    selector: 'demo-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <div>This is Vijay Krishna</div>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = "Hello World";
}