import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ScoreTableComponent } from './components/score-table/score-table.component';
import { CompareTableComponent } from './components/compare-table/compare-table.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ResetButtonComponent } from './components/reset-button/reset-button.component';
import { CompareTableRowComponent } from './components/compare-table/compare-table-row/compare-table-row.component';
import { ScoreTableRowComponent } from './components/score-table/score-table-row/score-table-row.component';
import { ScoreTableHeaderComponent } from './components/score-table/score-table-header/score-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTableComponent,
    CompareTableComponent,
    UserInputComponent,
    ResetButtonComponent,
    CompareTableRowComponent,
    ScoreTableRowComponent,
    ScoreTableHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
