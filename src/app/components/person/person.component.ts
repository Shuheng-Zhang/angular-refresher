import { PersonService } from './person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personList: string[];

  constructor(private personService: PersonService) {
  }

  onRemovePerson(name: string) {
    this.personService.removePerson(name);
  }

  ngOnInit(): void {
    this.personList = this.personService.persons;
  }
}
