import { PeriodoSintoma } from './periodoSintoma';
import { Pessoa } from './pessoa';
import { Sintoma } from './sintoma';

export class Questionario {
  public id: number;
  public sintomas: Sintoma;
  public periodoSintoma: PeriodoSintoma;
  public pessoa: Pessoa;
  public dataQuestionario: Date;
}
