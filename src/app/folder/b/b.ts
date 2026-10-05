import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-b',
  styleUrl: './b.css',
  templateUrl: './b.html',
})
export class B {
  @Input() name: string = '';
  @Input() city: string = '';

  
}
