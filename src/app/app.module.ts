import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { PageActionsService } from './services/page-actions.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageActionsTableComponent } from './components/page-actions-table/page-actions-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    PageActionsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [PageActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
