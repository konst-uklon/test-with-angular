import { Component, Input, OnInit } from '@angular/core';
import { UserItemType } from 'src/app/app-types/app-types';
import { HeaderDataType } from './score-table.types';

@Component({
  selector: 'app-score-table',
  templateUrl: '/score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
})
export class ScoreTableComponent implements OnInit {
  @Input() data: UserItemType[];

  headerData: HeaderDataType[] = [
    { textContent: 'Item' },
    { textContent: 'Score' },
    { textContent: '' },
  ];

  dataArrForScoreTable: UserItemType[];

  constructor() {}

  ngOnInit() {
    this.dataArrForScoreTable = this.data.length
      ? this.data
          .map((e) => ({ score: this.sumOfScores(e.values), ...e })) // add score property to items
          .sort((a, b) => b.score - a.score) // sort by highest score
      : null;
  }

  sumOfScores(arr) {
    let sum = 0;
    arr.forEach((bool) => (bool ? (sum += 1) : null));
    return sum;
  }
}
