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
  
  
}
import { Component, OnInit } from '@angular/core';
import {Perguntas} from "../shared/perguntas.model"
import { PerguntasService } from "../shared/perguntas.service"


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [PerguntasService]
})
export class QuizComponent implements OnInit {
  public static : string = "Pergunta"
  public resposta : string = ""
  public frases :  PerguntasService
  public alternativa : string = "Qual alternativa está correta?"
  public rodadaFrase : Perguntas
  public rodada : number = 0
  public questao : Array<Perguntas>

 
 
  constructor(private perguntasService : PerguntasService) {
    
  }

  ngOnInit(): void { 
    this.perguntasService.getQuestion().subscribe((data : any[]) => {
      console.log(data)
      this.questao = data
    })
  }

  

  public atualizaResposta(resposta : Event) : void {
     this.resposta = (<HTMLInputElement>resposta.target).value
      console.log(this.resposta)
  }
  
  public validarResposta() : void {
    if(this.resposta == "A") {
      alert("Resposta correta")
  
  
    } else {
      alert("Resposta errada")
      }
    }
    public atualizaRodada() : void {
      this.rodadaFrase = this.frases[this.rodada]
      this.resposta = ""
    } 
  } 

  <div class="container">
  <div class="jumbotron">
      <div class="row">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6 d-flex flex-row-reverse bd-highlight">
          </div>
      </div>
      <div *ngFor="let q of questao" >
      <div class="row"  >
          <div class="col">
             <h4>{{static}}</h4>
             <p style="font-size: 25px;">{{q.perguntas}}</p>
             <h4>{{alternativa}}</h4>
          </div>
      </div>
      <div class="row">
          <div class="col apply">
          <input type="radio" value="A" name="option" id="one" (input)="atualizaResposta($event)">
          <label for="one" class="btn btn-secondary">A</label> 
          <input type="radio" value="B" name="option" id="two" (input)="atualizaResposta($event)">
          <label for="two" class="btn btn-secondary" >B</label> 
          <input type="radio" value="C" name="option" id="three" (input)="atualizaResposta($event)">
          <label for="three" class="btn btn-secondary">C</label> 
          <input type="radio" value="D" name="option" id="four" (input)="atualizaResposta($event)">
          <label for="four" class="btn btn-secondary">D</label> 
      </div>
      </div>
      <div class="row">
          <div class="col d-flex flex-row-reverse bd-highlight">
              <button type="button" class="btn btn-primary" (click)="validarResposta()">Validar</button>
          </div>
      </div>
  </div>
  </div>
</div>


{
    
    "Questao": [
    {
    "id" : 1,
    "perguntas" : "qual é a Primeira regra?: A) A primeira, B) A segunda, C) A terceira, D) A quarta", 
    "correta": "A"
    }
]

}
    