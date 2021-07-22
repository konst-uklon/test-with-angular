import { Component, OnInit } from '@angular/core';
import { UserItemType, ValuesType } from './app-types/app-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly title: string = 'angular-test-app';
  userData: UserItemType[] =
    JSON.parse(localStorage.getItem('user-items')) || [];

  constructor() {}

  ngOnInit() {
    // this.userData = JSON.parse(localStorage.getItem('user-items')) || [];
  }
  changeAppData(newData?: UserItemType[]) {
    console.log(newData);

    if (newData) {
      this.userData = newData;
      localStorage.setItem('user-items', JSON.stringify(newData));
    } else {
      this.userData = [];
      localStorage.removeItem('user-items');
    }
  }

  resetAppData() {
    this.changeAppData();
  }

  deleteItem(id: string) {
    let { userData } = this;
    const newData = userData.filter((el, index) => index !== +id);
    this.changeAppData(newData);
  }

  addNewItem(itemName: string) {
    let { userData } = this;
    // array for new item, will fill with the relation of the new item to the existing ones
    const newItemValuesArr: ValuesType[] = [
      ...Array(userData.length).fill(false),
      null,
    ];

    // create new item
    const newItem: UserItemType = {
      name: itemName.toUpperCase(),
      values: newItemValuesArr,
    };

    // if there are already existing items, the new-to-old relationship is added to them by default "new less than old"
    if (userData.length > 0) {
      userData.forEach((el) => (el.values = [...el.values, true]));
    }

    // new data for app with new item
    const newData = [...userData, newItem];
    this.changeAppData(newData);
  }

  changeRatio(id: string) {
    let { userData } = this;
    const idArr = id.split(',').map((el: string) => +el); // create an id arr and convert all elements from string to numbers
    const [firstItemIndex, secondItemIndex] = idArr; //we have only 2 parameters, since we set them in the line 46 of this component
    const changeBool = (e: UserItemType, indexOfCompareElem: number) => {
      e.values[indexOfCompareElem] = !e.values[indexOfCompareElem]; // since all values are boolean, we can simply change them to their opposite
      return e;
    };

    const newData = userData.map(
      (e, index) =>
        index === firstItemIndex // find the first element to compare
          ? changeBool(e, secondItemIndex) // change the value of the first compared element
          : index === secondItemIndex // find the second element to compare
          ? changeBool(e, firstItemIndex) // change the value of the second compared element
          : e // return the unchanged item if it hasn't been compared
    );
    this.changeAppData(newData);
  }
}
