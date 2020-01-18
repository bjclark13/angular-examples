import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwearWordFilterPipe } from './swear-word-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SwearWordFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
