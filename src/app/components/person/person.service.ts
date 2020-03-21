import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonService {

  persons: string[];

  personsChanged = new Subject<string[]>();

  constructor(private httpClient: HttpClient) {}

  fetchPersons() {
    this.httpClient.get<any>('https://swapi.co/api/people/').pipe(map(tmpData => {
      return tmpData.results.map(r => r.name);
    })).subscribe(res => {
      console.log(res);
      this.persons = [...res];
      this.personsChanged.next(res);
    });
  }

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
