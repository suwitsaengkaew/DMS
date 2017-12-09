import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DevExtremeModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { DmsFirstPageComponent } from './pages/dmsfirstpage/dmsfirstpage.component';
import { DmspdfviewerComponent } from './pages/dmspdfviewer/dmspdfviewer.component';

import { InfoService } from './services/infoservice.service';

import { AppRoutingModule } from './routing/routing.module';

import { HighlightDirective, HighlightSelection } from './app.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HighlightSelection,
    DmsFirstPageComponent,
    DmspdfviewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DevExtremeModule,
    AppRoutingModule
  ],
  providers: [ InfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
