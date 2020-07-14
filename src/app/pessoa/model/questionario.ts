import { PeriodoSintoma } from '../../periodoSintoma';
import { Pessoa } from './pessoa';
import { Sintoma } from '../../sintoma';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class  Questionario {
  public id: number;
  public sintoma: Sintoma;
  public sintomaS: Sintoma[];

  public periodoSintoma: PeriodoSintoma;
  public pessoa: Pessoa;

  static getControl(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      sintomas: new FormControl(''),
      periodoSintoma: new FormControl(''),
    });
  }

  static getInicializeControl(questionario: Questionario) {
    return new FormGroup({
      id: new FormControl(questionario.id),
      sintomas: new FormControl(questionario.sintoma, [Validators.required]),
      periodoSintoma: new FormControl(questionario.periodoSintoma, [Validators.required]),
    })
  }
}
