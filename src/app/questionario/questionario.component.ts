import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Sexo } from '../pessoa/model/sexo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Questionario } from '../pessoa/model/questionario';
import { AuxilioCadastro } from '../pessoa/model/auxilio-cadastro';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  title : string ;
  sexos : Sexo[];
  step = 1;
  formGroup: FormGroup;
  public event: EventEmitter<any> = new EventEmitter();
  passoFinal: boolean = false;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    debugger;
    this.formGroup = Questionario.getControl();
    this.formGroup.addControl('sexo', new FormControl('', [Validators.required]))
    this.formGroup.addControl('dataNascimento', new FormControl('', [Validators.required]))
  }

  salvar(){
    if (this.step == 1) {
      this.step = 2;
      return; 
    }

    if (this.step == 2) {
      this.step = 3;
      return; 
    }
    // this.triggerEvent();
    // this.modalRef.hide();
  }

  // Emitindo o evento para o componente de cadastro de usuário
  /**
   * 
   * @param passoFinal indica se o form está apto para ir para o passo final , ou seja, 
   * que ja possa salvar na base
   */
  backToCadastro(passoFinal : boolean, auxilarPesquisa: boolean){
    const auxilioCadastro : AuxilioCadastro = new AuxilioCadastro();
    auxilioCadastro.passoFinal = passoFinal
    auxilioCadastro.flagInteresseAuxilioPesuisas = auxilarPesquisa;

    this.event.emit(this.formGroup);
    this.event.emit(auxilioCadastro);
    this.modalRef.hide();
  }

  triggerEvent() {
    debugger;
    this.event.emit(null);
  }

}
