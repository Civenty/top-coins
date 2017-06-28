import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { TopCoinsComponent } from './top-coins/top-coins.component';
import { TopCoinsChartComponent } from './top-coins-chart/top-coins-chart.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

import { CoinsDataService } from './services/coins-data/coins-data.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { ListOfCoinsComponent } from './list-of-coins/list-of-coins.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCoinsComponent,
    TopCoinsChartComponent,
		CoinDetailComponent,
		ListOfCoinsComponent,
		HomePageComponent
  ],
  imports: [
		ChartsModule,
    BrowserModule,
		HttpModule,
		FormsModule,
		NgbModule,
		RoutingModule
  ],
  providers: [CoinsDataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
