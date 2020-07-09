import { Pessoa } from './pessoa';

export class Usuario {
  public id: number;
  public userName: string;
  public email: string;
  public password: string;
  public dataCadastro: Date;
  public pessoa: Pessoa;
}
