import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() personList: string[];
}
