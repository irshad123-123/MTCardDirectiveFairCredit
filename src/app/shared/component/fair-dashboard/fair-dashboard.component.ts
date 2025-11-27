import { Component, OnInit } from '@angular/core';
import { Ifair } from '../../models/fair';
import { fairsArr } from '../../consts/fair';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstData : Ifair = fairsArr[0]
  fairArr : Array<Ifair> = fairsArr

  onChangeFair(fair : Ifair){
    this.firstData = fair
  }

}
