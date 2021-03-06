import { PersonService } from './person.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubcription: Subscription;

  isLoaded = false;

  constructor(private personService: PersonService) {
  }

  onRemovePerson(name: string) {
    this.personService.removePerson(name);
  }

  ngOnInit(): void {
    // this.personList = this.personService.persons;
    // Subscribe the updated data
    this.personListSubcription = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;

      this.isLoaded = false;
    });

    this.isLoaded = true;

    this.personService.fetchPersons();
  }

  // To avoid the memory leak
  // unsubscribe all subcriptions before component destroy
  ngOnDestroy(): void {
    this.personListSubcription.unsubscribe();
  }
}
