import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WriteComponent } from './write/write.component';
import { ReadComponent } from './read/read.component';
import { TimerComponent } from './read/timer/timer.component';

import { SecondsToTimePipe } from './read/timer/seconds-to-time.pipe';

import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    WriteComponent,
    ReadComponent,
    TimerComponent,
    SecondsToTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
