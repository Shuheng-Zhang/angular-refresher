import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PersonService {

  persons = ['Ken', 'Li', 'Jack', 'Zhang'];

  personsChanged = new Subject<string[]>();

  addPerson(username: string) {
    this.persons.push(username);

    // Call if the persons list changed
    // Update the DOM data after changing
    this.personsChanged.next(this.persons);

    console.log('Current Persons: ',  this.persons);
  }

  removePerson(username: string) {
    this.persons = this.persons.filter(person => {
      return person !== username;
    });

    this.personsChanged.next(this.persons);
    console.log('Current Persons: ',  this.persons);
  }
}
