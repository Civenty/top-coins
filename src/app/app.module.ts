import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { TopCoinsComponent } from './top-coins/top-coins.component';
import { TopCoinsChartComponent } from './top-coins-chart/top-coins-chart.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCoinsComponent,
    TopCoinsChartComponent,
    CoinDetailComponent
  ],
  imports: [
		ChartsModule,
    BrowserModule,
		HttpModule,
		FormsModule,
		NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
