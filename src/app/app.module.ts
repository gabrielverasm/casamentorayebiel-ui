import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundPrincipalComponent } from './background-principal/background-principal.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { NossaHistoriaComponent } from './nossa-historia/nossa-historia.component';
import { ConfirmacaoPresencaComponent } from './confirmacao-presenca/confirmacao-presenca.component';
import { BackgroundSecundarioComponent } from './background-secundario/background-secundario.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { ListaPresentesComponent } from './lista-presentes/lista-presentes.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundPrincipalComponent,
    BarraNavegacaoComponent,
    NossaHistoriaComponent,
    ConfirmacaoPresencaComponent,
    BackgroundSecundarioComponent,
    LocalizacaoComponent,
    ListaPresentesComponent,
    InicioComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
