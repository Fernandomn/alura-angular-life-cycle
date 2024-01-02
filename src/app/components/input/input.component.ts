import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  itemValue!: string;
  constructor() {}

  ngOnInit(): void {}

  addItem(): void {
    console.log('this.itemValue', this.itemValue);
  }
}
