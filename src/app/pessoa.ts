import { Sexo } from "./sexo"
import { Questionario } from './questionario';

export class Pessoa {
  public id: number;
  public nomeCompleto: string;
  public celular: string;
  public sexo: Sexo;
  public dataNascimento: Date;
  public questionario: Questionario;
  public flagInteresseAuxilioPesquisa: boolean;
}
