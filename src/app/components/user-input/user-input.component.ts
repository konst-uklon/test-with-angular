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
import { UserItemType, ValuesType } from 'src/app/app-types/app-types';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInputComponent implements OnInit {
  @Input() data: UserItemType[] = [];

  @Output() newItemEvent = new EventEmitter<UserItemType[]>();
  public userItem: string = '';
  private inputPattern = '^[a-zA-Z0-9 ]+$';
  userInput: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userInput = new FormGroup({});
  }

  ngOnInit() {
    this.userInput = new FormGroup({
      userItem: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.inputPattern),
        this.isUnique.bind(this),
      ]),
    });
  }

  isUnique(control: FormControl): {
    [nonUnique: string]: boolean;
  } | null {
    const value = control.value;
    const namesValues = !!this.data.length
      ? this.data.map((item) => item.name)
      : '';
    if (value && namesValues.includes(value.toUpperCase())) {
      return { nonUnique: true };
    }
    return null;
  }

  submit() {
    const { data } = this;
    const newItemName = this.userInput.value.userItem;
    // array for new item, will fill with the relation of the new item to the existing ones
    const newItemValuesArr: ValuesType[] = [
      ...Array(data.length).fill(false),
      null,
    ];

    // create new item
    const newItem: UserItemType = {
      name: newItemName.toUpperCase(),
      values: newItemValuesArr,
    };

    // if there are already existing items, the new-to-old relationship is added to them by default "new less than old"
    if (data.length > 0) {
      data.forEach((el) => (el.values = [...el.values, true]));
    }

    // new data for app with new item
    const newData = [...data, newItem];

    this.newItemEvent.emit(newData);
    this.userInput.reset();
    this.userInput.markAsUntouched();
  }
}
