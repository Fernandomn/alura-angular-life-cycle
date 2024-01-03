import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  shoppingList!: Array<Item>;

  itemToEdit!: Item;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.shoppingList = this.listaService.getListaDeCompra();
  }

  ngDoCheck(): void {
    console.log('app component do check');
    this.listaService.updateLocalStorage();
  }

  editItem(item: Item) {
    this.itemToEdit = item;
  }
}
