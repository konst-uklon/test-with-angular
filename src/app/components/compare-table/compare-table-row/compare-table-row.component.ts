import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RenderArrItemType } from '../compare-table.types';
import { UserItemType } from '../../../app-types/app-types';

@Component({
  selector: 'app-compare-table-row',
  templateUrl: './compare-table-row.component.html',
  styleUrls: ['./compare-table-row.component.scss'],
})
export class CompareTableRowComponent implements OnInit {
  dataForCompareTable: RenderArrItemType[];
  @Input() data: UserItemType[];
  @Output() toggleItemsEvent = new EventEmitter<string>();

  changeRatio(id: string) {
    this.toggleItemsEvent.emit(id);
  }

  constructor() {}
  ngOnInit() {
    this.dataForCompareTable = this.getRenderArr(this.data);
  }

  getRenderArr(dataArray) {
    const numberOfItems: number = dataArray.length;
    let arr: RenderArrItemType[] = [];

    for (let i = 0; i < numberOfItems; i++) {
      for (let u = i + 1; u < numberOfItems; u++) {
        const firstItem = dataArray[i];
        const secondItem = dataArray[u];
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
