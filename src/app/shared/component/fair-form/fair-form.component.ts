import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../models/fair';

@Component({
  selector: 'app-fair-form',
  templateUrl: './fair-form.component.html',
  styleUrls: ['./fair-form.component.scss']
})
export class FairFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() fairArr ! : Ifair

}
