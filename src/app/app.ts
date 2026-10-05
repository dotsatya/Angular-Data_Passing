import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A } from './a/a';
import { Child } from './child/child';

@Component({
  imports: [RouterOutlet, A, Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('DataPassing');

  //child to parent
  users: string[] = [];
  
  handleUsers(users: string[]) {
    console.log(users);
    this.users = users;
  }
}
