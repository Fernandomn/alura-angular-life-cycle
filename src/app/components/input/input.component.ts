import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  itemValue!: string;
  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  addItem(): void {
    this.listaService.addItemToList(this.itemValue);
    this.cleanField();
  }

  private cleanField() {
    this.itemValue = '';
  }
}
