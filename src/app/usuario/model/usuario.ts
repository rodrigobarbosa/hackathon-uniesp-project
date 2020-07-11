import { Pessoa } from '../../pessoa/model/pessoa';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { required, compare, alpha, minLength , RxFormBuilder, RxwebValidators} from "@rxweb/reactive-form-validators";

import { MustMatch } from 'src/app/util/validation/validar-senha';


export class Usuario {
  public id: number;
  public userName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public pessoa: Pessoa;

  constructor() {
    this.pessoa = new Pessoa();
  }


  static getControl(): FormGroup {
    return new FormGroup({
      id: new FormControl(),
      userName: new FormControl( '', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required, RxwebValidators.compare({fieldName:'password'})]),
      pessoa: Pessoa.getControl(),

    },
    );
  }

  static getInicializeControl(usuario: Usuario) {
    return new FormGroup({
      id: new FormControl(usuario.id),
      userName: new FormControl(usuario.userName, [Validators.required]),
      email: new FormControl(usuario.email, [Validators.required]),
      password: new FormControl(usuario.password, [Validators.required]),
      confirmPassword: new FormControl(usuario.confirmPassword, [Validators.required]),
      pessoa: Pessoa.getInicializeControl(usuario.pessoa)
    })
  }
}
