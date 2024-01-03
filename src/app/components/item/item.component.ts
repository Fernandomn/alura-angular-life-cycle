import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() emitItemToEdit = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  editItem() {
    this.emitItemToEdit.emit(this.item);
  }

  checkItem() {
    this.item.comprado = !this.item.comprado;
  }
}
