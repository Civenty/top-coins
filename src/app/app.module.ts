import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { RoutingModule } from './routing/routing.module';

// import { MainPageModule } from './main-page/main-page.module';

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
		// MainPageModule,
		SharedModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
