import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IcardArr } from '../../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() card !: IcardArr 
  constructor() { }
  @Output() editCard : EventEmitter<IcardArr> = new EventEmitter()
  @Output() removeId : EventEmitter<string> = new EventEmitter()
  ngOnInit(): void {
  }

  onEdit(card : IcardArr){
    this.editCard.emit(card)
  }

  onRemove(pId : string){
    this.removeId.emit(pId)
  }
}
