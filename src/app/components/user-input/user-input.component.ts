import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserItemType } from 'src/app/app-types/app-types';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInputComponent implements OnInit {
  @Input() data: UserItemType[] = [];

  @Output() newItemEvent = new EventEmitter<string>();
  public userItem: string = '';
  private inputPattern = '^[a-zA-Z0-9 ]+$';
  userInput!: FormGroup;

  ngOnInit() {
    this.userInput = new FormGroup({
      userItem: new FormControl('', [
        Validators.required,
        Validators.pattern(this.inputPattern),
        this.isUnique.bind(this),
      ]),
    });
  }
  constructor(private formBuilder: FormBuilder) {}

  isUnique(control: FormControl): {
    [unUnique: string]: boolean;
  } | null {
    console.log(control);
    const value = control.value;
    const namesValues = !!this.data.length
      ? this.data.map((item) => item.name)
      : '';
    if (namesValues.includes(value.toUpperCase())) {
      return { unUnique: true };
    }
    return null;
  }

  submit() {
    this.newItemEvent.emit(this.userInput.value.userItem);
    this.userInput.reset();
    this.userInput.markAsUntouched();
  }
}
