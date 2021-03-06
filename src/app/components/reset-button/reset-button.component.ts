import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss'],
})
export class ResetButtonComponent {
  @Input() isData: boolean = false; // change if some on page
}
