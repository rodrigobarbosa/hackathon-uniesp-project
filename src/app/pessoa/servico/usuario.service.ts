import { Injectable } from '@angular/core';
import { ServicoBasico } from './servico-basico.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../usuario/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends ServicoBasico<Usuario>{

  constructor(private httpClient : HttpClient) {
    super(httpClient, "usuario");
  }
}
