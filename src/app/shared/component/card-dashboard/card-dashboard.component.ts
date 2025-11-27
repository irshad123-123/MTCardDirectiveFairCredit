import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IcardArr } from '../../models/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {

  cardArr: Array<IcardArr> = [
    {
      pName: 'Iphone',
      pDistription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum alias voluptatum cupiditate! Aut doloribus accusantium ipsa adipisci, odit aperiam tempore eaque eos beatae cum, odio fugit. Culpa optio labore eum!',
      pCatlog: 'Electronic',
      pId: '123'
    },
    {
      pName: 'Table',
      pDistription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum alias voluptatum cupiditate! Aut doloribus accusantium ipsa adipisci, odit aperiam tempore eaque eos beatae cum, odio fugit. Culpa optio labore eum!',
      pCatlog: 'Product',
      pId: '124'
    },
    {
      pName: 'TV',
      pDistription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum alias voluptatum cupiditate! Aut doloribus accusantium ipsa adipisci, odit aperiam tempore eaque eos beatae cum, odio fugit. Culpa optio labore eum!',
      pCatlog: 'Electronic',
      pId: '125'
    }
  ]

  constructor(private _matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  @Output() EditCard: EventEmitter<IcardArr> = new EventEmitter()
  editCard !: IcardArr

  onNewCard(card: IcardArr) {
    this.cardArr = [card, ...this.cardArr]
  }
  onEditCard(card: IcardArr) {
    this.editCard = card
  }

  snackBar(msg: string) {
    this._matSnackBar.open(msg, 'close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    })
  }

  onRemoveCard(removeId: string) {
    let isConfirm = confirm('Are you sure want to remove this card !!!')
    if (isConfirm) {
      this.cardArr = this.cardArr.filter(id => id.pId !== removeId)
      this.snackBar('The card is removed successfully !!!')
    }
  }
  onUpdateCard(card: IcardArr) {
    let getIndex = this.cardArr.findIndex(id => id.pId === card.pId)
    this.cardArr[getIndex] = card
  }

}
