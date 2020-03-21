import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  personInfoInput = '';

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }


  onCreatePerson() {
    console.log(`Target: ${this.personInfoInput}`);
    this.personService.addPerson(this.personInfoInput);
    this.personInfoInput = '';

    console.log(this.personService.persons);
  }
}
