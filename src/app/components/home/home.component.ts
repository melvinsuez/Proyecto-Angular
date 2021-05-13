import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listaGit: any[] = [];

  constructor ( private git: GitService) { 
    this.git.getGit()
      .subscribe((lista:any) =>{
        this.listaGit = lista.data;
        console.log(this.listaGit);
        console.log('Git service completado');
      });
  }

}
