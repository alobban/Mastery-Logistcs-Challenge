import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadBoardComponent } from './load-board/load-board.component';
import { MaterialModule } from './material.module';
import { LoadInfoComponent } from './load-info/load-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadBoardComponent,
    LoadInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoadInfoComponent]
})
export class AppModule { }
