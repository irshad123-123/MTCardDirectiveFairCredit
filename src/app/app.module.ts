import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDashboardComponent } from './shared/component/card-dashboard/card-dashboard.component';
import { CardFormComponent } from './shared/component/card-form/card-form.component';
import { CardListComponent } from './shared/component/card-list/card-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FairDashboardComponent } from './shared/component/fair-dashboard/fair-dashboard.component';
import { FairFormComponent } from './shared/component/fair-form/fair-form.component';
import { FairListComponent } from './shared/component/fair-list/fair-list.component';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { Highlight1Directive } from './shared/directive/highlight1.directive';
import { UpperCaseDirective } from './shared/directive/upper-case.directive';
import { LowerCaseDirective } from './shared/directive/lower-case.directive';
import { CreditCardDirective } from './shared/directive/credit-card.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardDashboardComponent,
    CardFormComponent,
    CardListComponent,
    FairDashboardComponent,
    FairFormComponent,
    FairListComponent,
    HighlightDirective,
    Highlight1Directive,
    UpperCaseDirective,
    LowerCaseDirective,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
