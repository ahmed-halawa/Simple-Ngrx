import { Component, Input } from "@angular/core";

@Component({
    selector: 'card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.css'] 
})
export class CardDetailsComponent {
    @Input('element') element;
}