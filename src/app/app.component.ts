import { Component } from '@angular/core';
import { UserItemType } from './app-types/app-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title: string = 'angular-test-app';
  LSJson: string | null = localStorage.getItem('user-items');
  localStorageData: UserItemType[] = this.LSJson ? JSON.parse(this.LSJson) : [];
  userData: UserItemType[] = this.localStorageData;

  changeAppData(newData?: UserItemType[]) {
    if (newData) {
      this.userData = newData;
      localStorage.setItem('user-items', JSON.stringify(newData));
    } else {
      this.userData = [];
      localStorage.removeItem('user-items');
    }
  }
}
