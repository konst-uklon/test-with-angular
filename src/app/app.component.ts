import { Component } from '@angular/core';
import { UserItemType, ValuesType } from './app-types/app-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title: string = 'angular-test-app';
  // private LSJson: string | null = localStorage.getItem('user-items');
  // private localStorageData: UserItemType[] = this.LSJson
  //   ? JSON.parse(this.LSJson)
  //   : null;
  public userData: UserItemType[] =
    JSON.parse(localStorage.getItem('user-items')) || [];

  resetAppData() {
    this.userData = [];
    localStorage.removeItem('user-items');
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
    userData.push(newItem);
    localStorage.setItem('user-items', JSON.stringify(userData));
  }
}
