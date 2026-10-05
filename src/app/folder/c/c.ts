import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgFor],
  selector: 'app-c',
  styleUrl: './c.css',
  templateUrl: './c.html',
})
export class C {

  @Input() users: { name: string; city: string }[] = [];
}
