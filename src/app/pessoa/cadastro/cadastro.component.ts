import { Component, OnInit } from '@angular/core';
import { Sexo } from '../model/sexo';
import { FormGroup, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { Usuario } from '../../usuario/model/usuario';
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { BsModalService } from "ngx-bootstrap/modal";
import { QuestionarioComponent } from '../../questionario/questionario.component';
import { UsuarioService } from '../servico/usuario.service';
import { AuxilioCadastro } from '../model/auxilio-cadastro';
import { Router } from '@angular/router';




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
  modalRef: BsModalRef;
  salvar: boolean = false;


  constructor(private formBuilder: FormBuilder,
              private modalService: BsModalService,
              private usuarioService: UsuarioService,
              private route: Router) { }

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

  openModal() {
    if (this.formGroup.valid) {

      this.modalRef = this.modalService.show(QuestionarioComponent, {
        initialState: {
          title: "Hackaton uniesp",
          sexos: this.sexos
        }
      });
  
      this.salvarUsuario();

      // this.modalRef.content.event.subscribe((passoFinal: boolean) => {
      //   debugger;
      //   // this.usuario = usuario;
      // });
  
      console.log(this.formGroup);
    }
   
  }
  private salvarUsuario() {
    this.modalRef.content.event.subscribe((questionarioModal: any) => {
      debugger;

      if (questionarioModal instanceof FormGroup) {
        const questionarioFormGroup = questionarioModal as FormGroup;
        this.setValues(questionarioFormGroup);

      }

      if(questionarioModal instanceof AuxilioCadastro){
        const auxilioCadastro = questionarioModal as AuxilioCadastro;
        this.salvar =  auxilioCadastro.passoFinal;
        this.formGroup.controls.pessoa.get("flagInteresseAuxilioPesquisa").setValue(auxilioCadastro.flagInteresseAuxilioPesuisas);

      }
      debugger;
      if(this.salvar){
        this.usuarioService.salvar(this.formGroup.value).subscribe(()=> {
          console.log("Usuario salvo")
        }, (error) => {
          console.log("Algo deu errado", error)
        })  
      }
    });
  }

  /**
   * Adicionando os controladores do modal no formGroup de pessoa
   * @param formGroup 
   */
  setValues(formGroupQuestionario: FormGroup){
    this.formGroup.controls.pessoa.get("sexo").setValue(formGroupQuestionario.controls.sexo.value);
    this.formGroup.controls.pessoa.get("dataNascimento").setValue(formGroupQuestionario.controls.dataNascimento.value)

    formGroupQuestionario.removeControl('sexo')
    formGroupQuestionario.removeControl('dataNascimento')
    // this.formGroup.controls.pessoa.get("questionario").setValue(formGroupQuestionario.controls)
  }


}
