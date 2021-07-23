import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UserItemType, ValuesType } from 'src/app/app-types/app-types';

@Component({
  selector: 'app-score-table-row',
  templateUrl: './score-table-row.component.html',
  styleUrls: ['./score-table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreTableRowComponent implements OnInit, OnChanges {
  @Input() data: UserItemType[] = [];

  @Output() deleteItemEvent = new EventEmitter<string>();

  highestScore: number | null | undefined = null;
  arrForRender: UserItemType[] = [];

  constructor() {}

  deleteItem(id: string) {
    this.deleteItemEvent.emit(id);
  }
  ngOnInit() {}
  ngOnChanges() {
    this.arrForRender = this.data.length
      ? this.data
          .map((e) => ({ score: this.sumOfScores(e.values), ...e })) // add score property to items
          .sort((a, b) => b.score - a.score) // sort by highest score
      : [];
    this.highestScore = this.data.length // get the hightst score to define winner
      ? this.arrForRender[0].score
      : null;
  }

  sumOfScores(arr: ValuesType[]) {
    let sum = 0;
    arr.forEach((bool) => (bool ? (sum += 1) : null));
    return sum;
  }
}
