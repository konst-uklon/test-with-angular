import { Component, Input, OnInit } from '@angular/core';
import { RenderArrItemType } from '../compare-table.types';
import { UserItemType } from '../../../app-types/app-types';

@Component({
  selector: 'app-compare-table-row',
  templateUrl: './compare-table-row.component.html',
  styleUrls: ['./compare-table-row.component.scss'],
})
export class CompareTableRowComponent implements OnInit {
  @Input() dataForCompareTable: RenderArrItemType[];
  @Input() defaultData: UserItemType[];
  renderArr: RenderArrItemType[];

  constructor() {}
  ngOnInit() {}

  toggleValues(e: any) {
    const {
      target: { id },
    } = e;
    let { defaultData } = this;
    const idArr = id.split(',').map((el: string) => +el); // create an id arr and convert all elements from string to numbers
    const [firstItemIndex, secondItemIndex] = idArr; //we have only 2 parameters, since we set them in the line 46 of this component
    const changeBool = (e: UserItemType, indexOfCompareElem: number) => {
      e.values[indexOfCompareElem] = !e.values[indexOfCompareElem]; // since all values are boolean, we can simply change them to their opposite
      return e;
    };

    defaultData.map(
      (e, index) =>
        index === firstItemIndex // find the first element to compare
          ? changeBool(e, secondItemIndex) // change the value of the first compared element
          : index === secondItemIndex // find the second element to compare
          ? changeBool(e, firstItemIndex) // change the value of the second compared element
          : e // return the unchanged item if it hasn't been compared
    );
  }
}
