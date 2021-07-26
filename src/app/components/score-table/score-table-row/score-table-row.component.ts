import {
  Component,
  EventEmitter,
  Input,
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
export class ScoreTableRowComponent implements OnChanges {
  @Input() data: UserItemType[] = [];

  @Output() deleteItemEvent = new EventEmitter<UserItemType[]>();

  highestScore: number | null | undefined = null;
  arrForRender: UserItemType[] = [];

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

  deleteItem(id: string) {
    const { data } = this;
    const newData = data
      .filter((el, index) => index !== +id) // removing an item from app data
      .map((el) => {
        el.values.splice(+id, 1); // removing the dependency of the element in the values property from the deleted element
        return el;
      });

    this.deleteItemEvent.emit(newData);
  }

  sumOfScores(arr: ValuesType[]) {
    let sum = 0;
    arr.forEach((bool) => (bool ? (sum += 1) : null));
    return sum;
  }
}
