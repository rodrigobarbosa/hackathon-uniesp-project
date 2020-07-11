import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidarSenha]'
})
export class ValidarSenhaDirective implements Validator {

  private valFn;

  constructor() {
    this.valFn = validatePassword();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c);
  }

}

function validatePassword(): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      let group = control as FormGroup;
      if (group.controls['password'] && group.controls['confirmPassword']) {
        isValid = group.controls['password'].value == group.controls['confirmPassword'].value;
      }
    }
    if (isValid) {
      return null;
    } else {
      return { 'passwordCheck': 'failed' }
    }
  }
}
