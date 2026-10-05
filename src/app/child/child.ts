import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  @Output() getUsers = new EventEmitter<string[]>();

  name = 'Child';

  users = ['Saya', 'Sam', 'Santosh'];
  loadData() {
    this.getUsers.emit(this.users);
  }
}
