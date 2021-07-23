import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RenderArrItemType } from '../compare-table.types';
import { UserItemType } from '../../../app-types/app-types';

@Component({
  selector: 'app-compare-table-row',
  templateUrl: './compare-table-row.component.html',
  styleUrls: ['./compare-table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareTableRowComponent implements OnInit, OnChanges {
  dataForCompareTable: RenderArrItemType[] = [];
  @Input() data: UserItemType[] = [];
  @Output() toggleItemsEvent = new EventEmitter<string>();

  changeRatio(id: string) {
    this.toggleItemsEvent.emit(id);
  }

  constructor() {}
  ngOnInit() {}
  ngOnChanges() {
    this.dataForCompareTable = this.getRenderArr(this.data);
  }

  getRenderArr(dataArray: UserItemType[]) {
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
