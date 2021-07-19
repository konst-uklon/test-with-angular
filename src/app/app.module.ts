import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { CompareTableComponent } from './compare-table/compare-table.component';
import { WinnerIconComponent } from './winner-icon/winner-icon.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';

@NgModule({
  declarations: [AppComponent, ScoreTableComponent, CompareTableComponent, WinnerIconComponent, UserInputComponent, ResetButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
