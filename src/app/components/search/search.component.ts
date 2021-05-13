import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  loading = false;
  loadimg = false;
  listaGit: any[] = [];
  constructor( private git: GitService) { }

buscar( termino : string) {
  this.loadimg=false;
  this.loading =true;
  console.log(termino)
  this.git.buscarGit( termino )
    .subscribe ( (lista: any) => {
    console.log(lista);
    this.listaGit = lista.data;
    this.loading = false;
    this.loadimg = true;
  })
}

}
