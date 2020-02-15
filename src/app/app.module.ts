import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { PagamentoComponent } from './pagamento/pagamento.component';
registerLocaleData(ptBr);

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

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
    PageNotFoundComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
