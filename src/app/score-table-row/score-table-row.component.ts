import { Component } from '@angular/core';

@Component({
  selector: 'app-score-table-row',
  templateUrl: './score-table-row.component.html',
  styleUrls: ['./score-table-row.component.scss'],
})
export class ScoreTableRowComponent {
  data = [
    { name: '1', values: [null, true, true, true] },
    { name: '2', values: [false, null, true, true] },
    { name: '3', values: [false, false, null, true] },
    { name: '4', values: [false, false, false, null] },
  ];

  arrWithScore = this.data.length
    ? this.data
        .map((e) => ({ score: this.sumOfScores(e.values), ...e })) // add score property to items
        .sort((a, b) => b.score - a.score) // sort by highest score
    : null;

  highestScore: number | undefined = this.data.length // get the hightst score to define winner
    ? this.arrWithScore[0].score
    : null;

  sumOfScores(arr) {
    let sum = 0;
    arr.forEach((bool) => (bool ? (sum += 1) : null));
    return sum;
  }
}
