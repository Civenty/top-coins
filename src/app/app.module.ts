import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { RoutingModule } from './routing/routing.module';

import { MainPageModule } from './main-page/main-page.module';

import { AppComponent } from './app.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
		CoinDetailComponent,
  ],
  imports: [
		BrowserModule,
		RoutingModule,
		MainPageModule,
		ChartsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
