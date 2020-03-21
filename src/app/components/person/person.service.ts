import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  persons = ['Ken', 'Li', 'Jack', 'Zhang'];

  addPerson(username: string) {
    this.persons.push(username);

    console.log(`Current Persons: ${this.persons}`);
  }

  removePerson(username: string) {
    this.persons = this.persons.filter(person => {
      return person !== username;
    });

    console.log(`Current Persons: ${this.persons}`);
  }
}
