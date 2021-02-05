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
    if(this.resposta == "") {
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

