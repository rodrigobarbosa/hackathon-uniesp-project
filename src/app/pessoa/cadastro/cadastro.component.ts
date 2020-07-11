import { Component, OnInit } from '@angular/core';
import { Sexo } from '../model/sexo';
import { FormGroup, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { Usuario } from '../../usuario/model/usuario';
import {NgForm} from '@angular/forms';
import { MustMatch } from 'src/app/util/validation/validar-senha';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  sexos : Sexo[] = [Sexo.MASCULINO, Sexo.FEMININO];
  sexo :Sexo;
  formGroup: FormGroup;
  checked: boolean = false;
  submitted: boolean= false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = Usuario.getControl();
    // this.formGroup.addControl('validator', validator.get('validator'))
  }

  onSubmit(){
    debugger;
    // const sexo = this.formGroup.controls.pessoa.get("sexo");

  }

  onChangeChecked(event){
    debugger;
    this.checked = !this.checked;
    const sexo = this.formGroup.controls.pessoa.get("sexo");
    
  }

  public hasError = (controlName: string, errorName: string, formGroupName?: string[]) => {

    if (formGroupName && formGroupName.includes('pessoa') ) {
      return this.formGroup.get('pessoa').get(controlName).hasError(errorName);
    }

    // if (formGroupName && formGroupName.includes('pessoa') && !formGroupName.includes('usuario')) {
    //   return this.formGroup.get('pessoa').get(controlName).hasError(errorName);
    // }
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  save(){
    debugger;
    this.submitted = true
    
    console.log('Adicionado validator' ,this.formGroup.get("validator"));
    console.log('FormGroup' ,this.formGroup.controls);
    

  }

  get f(){
    return this.formBuilder.control;
  }

}
