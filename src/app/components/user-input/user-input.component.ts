import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  newItemName: string = '';
  // error: boolean = false;
  // errorMassage: string = '';

  addNewItem(e: any) {
    e.preventDefault();
    console.log(this.newItemName);
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
