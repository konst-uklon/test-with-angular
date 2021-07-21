import { Component, Input, OnInit } from '@angular/core';
import { UserItemsArrType, UserItemType } from 'src/app/app-types/app-types';

@Component({
  selector: 'app-score-table-row',
  templateUrl: './score-table-row.component.html',
  styleUrls: ['./score-table-row.component.scss'],
})
export class ScoreTableRowComponent {
  @Input() arrForRender: UserItemType[];

  highestScore: number | undefined;

  constructor() {}

  ngOnInit() {
    this.highestScore = this.arrForRender.length // get the hightst score to define winner
      ? this.arrForRender[0].score
      : null;
  }
}
