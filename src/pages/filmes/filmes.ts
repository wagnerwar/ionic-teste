import { Component } from '@angular/core';

@Component({
  selector: 'filmes',
  templateUrl: 'filmes.html'
})

export class FilmesPage {
  items: Array<{title: string, preco: number}>;
  constructor() {
     this.items = [];
     this.items.push({"title": "Meu malvado Favorito", "preco": 1.00}); 
     this.items.push({"title": "Meu malvado Favorito 2", "preco": 12.00});
     this.items.push({"title": "Os Minions", "preco": 1.06});

  }
}
