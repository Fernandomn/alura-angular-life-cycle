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
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  addItemToList(itemName: string): void {
    const item = this.createItem(itemName);
    this.listaDeCompra.push(item);
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

  editItem(oldItem: Item, newItemName: string): void {
    const editedItem: Item = { ...oldItem, nome: newItemName };
    this.listaDeCompra.splice(
      this.listaDeCompra.indexOf(oldItem),
      1,
      editedItem
    );
  }

  private getLargerId(): number {
    const ids = this.listaDeCompra.map((compra) => compra.id || 0);
    const largerIdObj = this.listaDeCompra.find(
      (item) => item.id === Math.max(...ids)
    );
    return (largerIdObj?.id || 0) + 1;
  }
}
