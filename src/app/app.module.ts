import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListeIncédentsService } from './liste-incédents.service';
import { AmedService } from './herak.service'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListeIncédentsService,AmedService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
