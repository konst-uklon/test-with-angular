import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';
import { UserItemsArrType, UserItemType } from 'src/app/app-types/app-types';

@Component({
  selector: 'app-score-table-row',
  templateUrl: './score-table-row.component.html',
  styleUrls: ['./score-table-row.component.scss'],
})
export class ScoreTableRowComponent implements OnInit, OnChanges {
  @Input() dataForRender: UserItemType[];

  @Output() deleteItemEvent = new EventEmitter<string>();

  highestScore: number | undefined;
  arrForRender: UserItemType[];

  constructor() {}

  deleteItem(id: string) {
    this.deleteItemEvent.emit(id);
  }
  ngOnInit() {}
  ngOnChanges() {
    this.arrForRender = this.dataForRender.length
      ? this.dataForRender
          .map((e) => ({ score: this.sumOfScores(e.values), ...e })) // add score property to items
          .sort((a, b) => b.score - a.score) // sort by highest score
      : null;
    this.highestScore = this.dataForRender.length // get the hightst score to define winner
      ? this.arrForRender[0].score
      : null;
  }

  sumOfScores(arr) {
    let sum = 0;
    arr.forEach((bool) => (bool ? (sum += 1) : null));
    return sum;
  }
}
