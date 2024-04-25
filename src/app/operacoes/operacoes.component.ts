import { Component, OnInit } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrl: './operacoes.component.css',
})
export class OperacoesComponent implements OnInit {
  maxDigitos = 4;
  t1 = 1;
  t2 = 1;
  operacao = "+";
  errado = "";

  ngOnInit(): void {
    addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.verificaResposta();
      }
    });
  }

  proximoProblema() {
    (<HTMLInputElement>document.getElementById('resposta')).value = "";
    (<HTMLInputElement>document.getElementById('resposta')).focus();
    if(Math.random() < 0.5) {
      this.operacao = "-";
    }
    switch (this.operacao) {
      case "+":
        this.proximaAdicao();
        break;
      case "-":
        this.proximaSubtracao();
        break;
      default:
        break;
    }
  }

  proximaAdicao() {
    let tamanhot1 = this.randomDigit(this.maxDigitos);
    let tamanhot2 = this.randomDigit(this.maxDigitos);
    let d1 = '';
    let d2 = '';
    for(let i=0; i<tamanhot1; i++) {
      let d = this.randomDigit(9);
      d1 = d1 + d;
    }
    for(let i=0; i<tamanhot2; i++) {
      let outro = i>= tamanhot1 ? 9 : 9-parseInt(d1.charAt(i));
      let d = this.randomDigit(outro);
      d2 = d2 + d;
    }

    if(tamanhot1 == tamanhot2 && tamanhot1 == 1) {
      d2 = this.randomDigit(9).toString();
    }

    d1 = d1.split("").reverse().join("");
    d2 = d2.split("").reverse().join("");

    this.t1 = parseInt(d1);
    this.t2 = parseInt(d2);
  }

  proximaSubtracao(){
    let tamanhot1 = this.randomDigit(this.maxDigitos);
    let tamanhot2 = this.randomDigit(tamanhot1);
    let d1 = '';
    let d2 = '';
    for(let i=0; i<tamanhot1; i++) {
      let d = this.randomDigit(9);
      d1 = d1 + d;
    }
    for(let i=0; i<tamanhot2; i++) {
      let d = this.randomDigit(parseInt(d1.charAt(i)));
      d2 = d2 + d;
    }
    d1 = d1.split("").reverse().join("");
    d2 = d2.split("").reverse().join("");

    this.t1 = parseInt(d1);
    this.t2 = parseInt(d2);
  }

  randomDigit(max:number) {
    return Math.floor(Math.random() * Math.abs(max)) + 1;
  }

  verificaResposta() {
    var inputValue = (<HTMLInputElement>document.getElementById('resposta')).value.split("").reverse().join("");
    var resposta = parseInt(inputValue);
    switch (this.operacao) {
      case "+":
        this.verificaAdicao(resposta);
        break;
      case "-":
        this.verificaSubtracao(resposta);
        break;
      default:
        break;
    }
  }

  verificaAdicao(resposta:number) {
    if(this.t1 + this.t2 == resposta) {
      this.errado = "";
      console.log("resposta certa");
      this.proximoProblema();
    } else {
      this.errado = "errado";
      console.log("resposta errada")
    }
  }

  verificaSubtracao(resposta:number) {
    if(this.t1 - this.t2 == resposta) {
      this.errado = "";
      console.log("resposta certa");
      this.proximoProblema();
    } else {
      this.errado = "errado";
      console.log("resposta errada")
    }
  }

  input() {
    this.errado = "";
  }
}
