import { Component } from '@angular/core';
import { B } from '../folder/b/b';
import { C } from '../folder/c/c';

@Component({
  imports: [B , C],
  selector: 'app-a',
  styleUrl: './a.css',
  templateUrl: './a.html',
})
export class A {
  name = 'satya';

  onUserChange(value: string) {
    this.name = value
  }

  //////////array
  users = [
    { name: 'Saya', city: 'Pune' },
    { name: 'Sam', city: 'Mumbai' },
  ];
}
