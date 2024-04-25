import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrl: './letras.component.css'
})
export class LetrasComponent implements OnInit {
  letra: String = "A";
  vogal = true;
  consoante = false;
  som = false;
  textoProxima = "letra";
  vogais = ["A", "E", "I", "O", "U"];
  consoantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
  letras: string[] = [];

  ngOnInit(): void {
    this.changeTipoLetra();
  }

  prox() {
    let ultimaLetra = this.letra;
    while(ultimaLetra == this.letra && this.letras.length > 0) {
      let indice = Math.floor(Math.random()*this.letras.length);
      this.letra = this.letras[Math.floor(Math.random()*this.letras.length)];
    }
    if(this.som) {
      this.playAudio();
    }
  }

  changeTipoLetra() {

    this.letras = [];

    if(this.vogal) {
      this.letras = [...this.letras, ...this.vogais];
    }
    if(this.consoante) {
      this.letras = [...this.letras, ...this.consoantes];
    }
  }

  changeSom() {
    if(this.som) {
      this.playAudio();
    }
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "./assets/audio/alfabeto/" + this.letra + ".mp3";
    audio.load();
    audio.play();
  }
}
