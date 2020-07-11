import { Sexo } from "./sexo"
import { Questionario } from './questionario';
import { FormGroup, Validators, FormControl } from '@angular/forms';


export class Pessoa {
  public id: number;
  public nomeCompleto: string;
  public celular: string;
  public sexo: Sexo;
  public dataNascimento: Date;
  public questionario: Questionario;
  public flagInteresseAuxilioPesquisa: boolean;

  constructor(){
    this.questionario = new Questionario();
  }


  static getControl(): FormGroup {
    return new FormGroup({
      id: new FormControl(),
      nomeCompleto: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      // questionario: Questionario.getControl(),

    });
  }

  static getInicializeControl(pessoa: Pessoa) {
    return new FormGroup({
      id: new FormControl(pessoa.id),
      nomeCompleto: new FormControl(pessoa.nomeCompleto, [Validators.required]),
      celular: new FormControl(pessoa.celular, [Validators.required]),
      sexo: new FormControl(pessoa.sexo, [Validators.required]),
      dataNascimento: new FormControl(pessoa.dataNascimento, [Validators.required]),
      questionario: Questionario.getInicializeControl(pessoa.questionario)
    })
  }
}
