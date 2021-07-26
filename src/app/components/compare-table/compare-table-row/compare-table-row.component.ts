import {
  Component,
  Input,
  Output,
  OnChanges,
  ChangeDetectionStrategy,
  EventEmitter,
} from '@angular/core';
import { RenderArrItemType } from '../compare-table.types';
import { UserItemType } from '../../../app-types/app-types';

@Component({
  selector: 'app-compare-table-row',
  templateUrl: './compare-table-row.component.html',
  styleUrls: ['./compare-table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareTableRowComponent implements OnChanges {
  dataForCompareTable: RenderArrItemType[] = [];
  @Input() data: UserItemType[] = [];
  @Output() public readonly toggleItemsEvent = new EventEmitter<
    UserItemType[]
  >();

  ngOnChanges() {
    this.dataForCompareTable = this.getRenderArr(this.data);
  }

  changeRatio(id: string) {
    const { data } = this;
    const idArr = id.split(',').map((el: string) => +el); // create an id arr and convert all elements from string to numbers
    const [firstItemIndex, secondItemIndex] = idArr; //we have only 2 parameters, since we set them in the line 46 of this component
    const changeBool = (e: UserItemType, indexOfCompareElem: number) => {
      e.values[indexOfCompareElem] = !e.values[indexOfCompareElem]; // since all values are boolean, we can simply change them to their opposite
      return e;
    };

    const newData = data.map(
      (e, index) =>
        index === firstItemIndex // find the first element to compare
          ? changeBool(e, secondItemIndex) // change the value of the first compared element
          : index === secondItemIndex // find the second element to compare
          ? changeBool(e, firstItemIndex) // change the value of the second compared element
          : e // return the unchanged item if it hasn't been compared
    );

    this.toggleItemsEvent.emit(newData);
  }

  getRenderArr(dataArray: UserItemType[]) {
    const numberOfItems: number = dataArray.length;
    let arr: RenderArrItemType[] = [];

    for (let i = 0; i < numberOfItems; i++) {
      for (let u = i + 1; u < numberOfItems; u++) {
        const firstItem: UserItemType = dataArray[i];
        const secondItem: UserItemType = dataArray[u];
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
