import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		RoutingModule,
		SharedModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
