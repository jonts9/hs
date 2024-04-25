import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetrasComponent } from './letras/letras.component';
import { OperacoesComponent } from './operacoes/operacoes.component';

const routes: Routes = [
  { path: "letras", component: LetrasComponent },
  { path: "operacoes", component: OperacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
