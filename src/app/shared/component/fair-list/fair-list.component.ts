import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../models/fair';

@Component({
  selector: 'app-fair-list',
  templateUrl: './fair-list.component.html',
  styleUrls: ['./fair-list.component.scss']
})
export class FairListComponent implements OnInit {
  @Input() fairArr ! : Array<Ifair>
  @Output() onChange : EventEmitter<Ifair> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onChangeFair(fair : Ifair){
    this.onChange.emit(fair)
  }
}
