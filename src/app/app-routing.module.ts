import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetrasComponent } from './letras/letras.component';

const routes: Routes = [
  { path: "letras", component: LetrasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
