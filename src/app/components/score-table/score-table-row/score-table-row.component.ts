import { Component, Input, OnInit } from '@angular/core';
import { UserItemsArrType, UserItemType } from 'src/app/app-types/app-types';

@Component({
  selector: 'app-score-table-row',
  templateUrl: './score-table-row.component.html',
  styleUrls: ['./score-table-row.component.scss'],
})
export class ScoreTableRowComponent {
  @Input() dataForRender: UserItemType[];

  highestScore: number | undefined;
  arrForRender;

  constructor() {}

  ngOnInit() {
    this.highestScore = this.dataForRender.length // get the hightst score to define winner
      ? this.dataForRender[0].score
      : null;

    this.arrForRender = this.dataForRender.length
      ? this.dataForRender
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
