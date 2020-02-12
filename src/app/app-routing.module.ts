import { PagamentoComponent } from './pagamento/pagamento.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaPresentesComponent } from './lista-presentes/lista-presentes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'presentes', component: ListaPresentesComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
