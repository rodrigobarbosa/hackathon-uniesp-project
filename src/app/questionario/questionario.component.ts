import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Sexo } from '../pessoa/model/sexo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Questionario } from '../pessoa/model/questionario';


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

  // Emitindo o evento para o componente de cadastro de pessoa
  backToCadastro(){
    this.passoFinal = true
    this.event.emit(this.formGroup);
    this.event.emit(this.passoFinal);
  }

  triggerEvent() {
    debugger;
    this.event.emit(null);
  }

}
