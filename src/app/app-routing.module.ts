import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './entrada/entrada.component';

const routes: Routes = [
  {path: '', component: EntradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
