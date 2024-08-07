import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
