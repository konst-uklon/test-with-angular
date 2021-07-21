import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserItemType } from 'src/app/app-types/app-types';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  @Input() data: UserItemType[];

  @Output() newItemEvent = new EventEmitter<string>();
  // error: boolean = false;
  // errorMassage: string = '';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  // newItem(e: any) {
  //   const inputValue = (<HTMLInputElement>e.target).value;
  // if (inputValue === '') {
  //   this.setError(true, 'Required');
  // } else if (inputValue.length >= 7) {
  //   this.setError(true, 'Name is too long');
  // } else if (inputValue === '') {
  //   this.setError(true, 'Required');
  // } else {
  //   this.newItemName = inputValue.toUpperCase();
  // }
  // }

  // setError(bool: boolean, text: string) {
  //   let { error, errorMassage } = this;
  //   error = bool;
  //   errorMassage = text;
  // }
}
