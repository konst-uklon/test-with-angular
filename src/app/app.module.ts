import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { CompareTableComponent } from './compare-table/compare-table.component';
import { WinnerIconComponent } from './winner-icon/winner-icon.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { FormsModule } from '@angular/forms';
import { CompareTableRowComponent } from './compare-table-row/compare-table-row.component';
import { ScoreTableRowComponent } from './score-table-row/score-table-row.component';
import { ScoreTableHeaderComponent } from './score-table-header/score-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTableComponent,
    CompareTableComponent,
    WinnerIconComponent,
    UserInputComponent,
    ResetButtonComponent,
    CompareTableRowComponent,
    ScoreTableRowComponent,
    ScoreTableHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
