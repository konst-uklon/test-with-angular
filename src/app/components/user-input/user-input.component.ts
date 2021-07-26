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
    this.newItemEvent.emit(this.userInput.value.userItem);
    this.userInput.reset();
    this.userInput.markAsUntouched();
  }
}
