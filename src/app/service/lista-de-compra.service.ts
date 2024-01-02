import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [
    {
      id: 1,
      nome: 'Queijo prato',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 2,
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 3,
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: true,
    },
  ];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  addItemToList(itemName: string): void {
    const item = this.createItem(itemName);
    this.listaDeCompra.push(item);
    this.updateLocalStorage();
  }

  editItem(oldItem: Item, newItemName: string): void {
    const editedItem: Item = { ...oldItem, nome: newItemName };
    this.listaDeCompra.splice(
      this.listaDeCompra.indexOf(oldItem),
      1,
      editedItem
    );
    this.updateLocalStorage();
  }

  private getLargerId(): number {
    const ids = this.listaDeCompra.map((compra) => compra.id || 0);
    const largerIdObj = this.listaDeCompra.find(
      (item) => item.id === Math.max(...ids)
    );
    return (largerIdObj?.id || 0) + 1;
  }

  private createItem(itemName: string): Item {
    const id = this.getLargerId();

    const item: Item = {
      id,
      nome: itemName,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };
    return item;
  }

  private updateLocalStorage(): void {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
