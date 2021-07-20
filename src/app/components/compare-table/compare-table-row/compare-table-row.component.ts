import { Component } from '@angular/core';
import { RenderArrItemType } from './compare-table-row.types';
import { UserItemType } from '../../../app-types/app-types';

@Component({
  selector: 'app-compare-table-row',
  templateUrl: './compare-table-row.component.html',
  styleUrls: ['./compare-table-row.component.scss'],
})
export class CompareTableRowComponent {
  data = [
    { name: '1', values: [null, true, true, true] },
    { name: '2', values: [false, null, true, true] },
    { name: '3', values: [false, false, null, true] },
    { name: '4', values: [false, false, false, null] },
    // { name: '5', values: [null, true, true, true] },
    // { name: '6', values: [false, null, true, true] },
    // { name: '7', values: [false, false, null, true] },
    // { name: '8', values: [false, false, false, null] },
    // { name: '9', values: [null, true, true, true] },
    // { name: '10', values: [false, null, true, true] },
    // { name: '11', values: [false, false, null, true] },
    // { name: '12', values: [false, false, false, null] },
    // { name: '13', values: [null, true, true, true] },
    // { name: '14', values: [false, null, true, true] },
    // { name: '15', values: [false, false, null, true] },
    // { name: '16', values: [false, false, false, null] },
  ];

  renderArr = this.getRenderArr();

  getRenderArr() {
    const numberOfItems: number = this.data.length;
    let arr: RenderArrItemType[] = [];

    for (let i = 0; i < numberOfItems; i++) {
      for (let u = i + 1; u < numberOfItems; u++) {
        const firstItem = this.data[i];
        const secondItem = this.data[u];
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

  toggleValues(e: any) {
    // e.preventDefault();
    const {
      target: { id },
    } = e;
    let { data } = this;
    const idArr = id.split(',').map((el: string) => +el); // create an id arr and convert all elements from string to numbers
    const [firstItemIndex, secondItemIndex] = idArr; //we have only 2 parameters, since we set them in the line 46 of this component
    const changeBool = (e: UserItemType, indexOfCompareElem: number) => {
      e.values[indexOfCompareElem] = !e.values[indexOfCompareElem]; // since all values are boolean, we can simply change them to their opposite
      return e;
    };

    return data.map(
      (e, index) =>
        index === firstItemIndex // find the first element to compare
          ? changeBool(e, secondItemIndex) // change the value of the first compared element
          : index === secondItemIndex // find the second element to compare
          ? changeBool(e, firstItemIndex) // change the value of the second compared element
          : e // return the unchanged item if it hasn't been compared
    );
  }
}
