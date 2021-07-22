import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserItemType } from 'src/app/app-types/app-types';

@Component({
  // moduleId: module.id,
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  @Input() data: UserItemType[];

  @Output() newItemEvent = new EventEmitter<string>();
  // error: boolean = false;
  // errorMassage: string = '';
  public itemName: string;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.itemName = '';
  }
}

// import { Directive, forwardRef, Attribute } from '@angular/core';
// import { NG_VALIDATORS,Validator,
//          Validators,AbstractControl,ValidatorFn } from '@angular/forms';

// @Directive({
//     selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
//     providers: [
//         { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
//     ]
// })
// export class EqualValidator implements Validator {
//     constructor( @Attribute('validateEqual') public validateEqual: string) {}

//     validate(c: AbstractControl): { [key: string]: any } {
//         // self value (e.g. retype password)
//         let v = c.value;

//         // control value (e.g. password)
//         let e = c.root.get(this.validateEqual);

//         // value not equal
//         if (e && v !== e.value) return {
//             validateEqual: false
//         }
//         return null;
//     }
// }
