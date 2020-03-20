import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  @Output() personCreate = new EventEmitter<string>();

  personInfoInput = '';

  constructor() { }

  ngOnInit() {
  }


  onCreatePerson() {
    console.log(`Target: ${this.personInfoInput}`);

    this.personCreate.emit(this.personInfoInput);

    this.personInfoInput = '';
  }
}
