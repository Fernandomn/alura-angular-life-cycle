import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  shoppingList!: Array<Item>;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.shoppingList = this.listaService.getListaDeCompra();

    console.log('this.shoppingList', this.shoppingList);
  }
}
