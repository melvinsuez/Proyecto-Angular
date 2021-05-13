import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn:'root'
})
export class GitService {

  constructor( private http: HttpClient) { 
    console.log('Git service listo');
  }

getGit() {

return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=7t6WFvAWrIfxgxnDZwyoT86VI3pV4fGQ&q=cat');
  
}

buscarGit( termino: string ) {

  return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=7t6WFvAWrIfxgxnDZwyoT86VI3pV4fGQ&q=${ termino }&limit=24`);

}
}

