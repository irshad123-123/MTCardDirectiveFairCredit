import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IcardArr } from '../../models/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit, OnChanges {
  isEditMode : boolean = false;
  @ViewChild('cardForm') cardForm ! : NgForm
  @Output() newCardAdd : EventEmitter<IcardArr> = new EventEmitter()
  @Input() editCard ! : IcardArr
  @Output() updateCard : EventEmitter<IcardArr> = new EventEmitter() 
  constructor(private _matSnackBar : MatSnackBar) { }

  snackBar(msg : string){
    this._matSnackBar.open(msg, 'close',{
      duration: 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    })
  }

  ngOnInit(): void {
  }

  Uuid = () => {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };
  onAddCard(){
    if(this.cardForm.valid){
          let obj = {
      ...this.cardForm.value,
      pId : this.Uuid()
    }
    this.newCardAdd.emit(obj)
    this.cardForm.reset()
    this.snackBar('The new card is added successfully !!!')
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editCard'].currentValue){
      this.cardForm.form.patchValue(changes['editCard'].currentValue)
      this.isEditMode = true
    }
  }

  onUpdateCard(){
    let Updated_Obj = {
      ...this.cardForm.value,
      pId : this.editCard.pId
    }
    this.updateCard.emit(Updated_Obj)
    this.cardForm.reset()
    this.isEditMode = false
    this.snackBar('The card is updated successfully !!!')
  }
}
