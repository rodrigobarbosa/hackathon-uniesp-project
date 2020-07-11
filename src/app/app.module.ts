import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PessoaComponent } from './pessoa/pessoa.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { CommonModule } from '@angular/common';
import { ValidarSenhaDirective } from './util/validation/validar-senha.directive';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module
import { RxFormBuilder } from "@rxweb/reactive-form-validators";




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PessoaComponent,
    QuestionarioComponent,
    MenuComponent,
    CadastroComponent,
    ValidarSenhaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [RxFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
