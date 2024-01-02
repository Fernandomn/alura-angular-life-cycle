import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemToEdit!: Item;

  itemValue!: string;
  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemToEdit'].firstChange) {
      this.itemValue = this.itemToEdit?.nome;
    }
  }

  addItem(): void {
    this.listaService.addItemToList(this.itemValue);
    this.cleanField();
  }

  private cleanField() {
    this.itemValue = '';
  }
}
