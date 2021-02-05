import { Perguntas } from './perguntas.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class PerguntasService {
    constructor (private http : HttpClient) {}
  public perguntas : Perguntas
       
public getQuestion() {
    return this.http.get("http://localhost:3000/Questao")
}
public getId(id : number){
    return this.http.get("htpp://localhost:3000/Questao?id=" + id)
}
  
  
    
}
