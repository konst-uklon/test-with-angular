import { Component, Input, OnInit } from '@angular/core';
import { UserItemType } from 'src/app/app-types/app-types';
import { RenderArrItemType } from './compare-table.types';

@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.scss'],
})
export class CompareTableComponent implements OnInit {
  @Input() data: UserItemType[];

  dataForCompareTableRow: RenderArrItemType[];

  constructor() {}

  ngOnInit() {
    this.dataForCompareTableRow = this.getRenderArr();
  }

  getRenderArr() {
    const { data } = this;
    const numberOfItems: number = data.length;
    let arr: RenderArrItemType[] = [];

    for (let i = 0; i < numberOfItems; i++) {
      for (let u = i + 1; u < numberOfItems; u++) {
        const firstItem = data[i];
        const secondItem = data[u];
        const { name, values } = firstItem;

        arr.push({
          firstItemName: name,
          firstItemIsMore: values[u],
          secondItemName: secondItem.name,
          id: `${i}, ${u}`,
        });
      }
    }

    return arr;
  }
}
