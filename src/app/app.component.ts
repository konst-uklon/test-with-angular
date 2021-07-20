import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test-app';
  @Input() userData = [
    { name: '1', values: [null, true, true, true] },
    { name: '2', values: [false, null, true, true] },
    { name: '3', values: [false, false, null, true] },
    { name: '4', values: [false, false, false, null] },
  ];
}
