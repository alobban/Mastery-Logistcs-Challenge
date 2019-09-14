import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoadInfoComponent]
})
export class AppModule { }
