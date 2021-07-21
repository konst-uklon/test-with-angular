import { Component, Input, OnInit } from '@angular/core';
import { HeaderDataType } from '../score-table.types';

@Component({
  selector: 'app-score-table-header',
  templateUrl: './score-table-header.component.html',
  styleUrls: ['./score-table-header.component.scss'],
})
export class ScoreTableHeaderComponent implements OnInit {
  readonly dataForRender: HeaderDataType[] = [
    { textContent: 'Item' },
    { textContent: 'Score' },
    { textContent: '' },
  ];

  constructor() {}

  ngOnInit() {}
}
