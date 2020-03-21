import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  persons = ['Ken', 'Li', 'Jack', 'Zhang'];

  addPerson(username: string) {
    this.persons.push(username);
  }
}
