import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-refresher';

  persons = ['Ken', 'Li', 'Jack', 'Zhang'];

  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
