import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { RoutingModule } from '../routing/routing.module';

import { CoinsDataService } from '../services/coins-data/coins-data.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HomePageComponent } from './home-page/home-page.component';
import { ListOfCoinsComponent } from './list-of-coins/list-of-coins.component';
import { FavouriteCoinsComponent } from './favourite-coins/favourite-coins.component';

@NgModule({
  imports: [
		CommonModule,
		ChartsModule,
		HttpModule,
		FormsModule,
		NgbModule,
		RoutingModule		
	],
	providers: [
		CoinsDataService,
		CookieService
	],
	// exports: [HomePageComponent],
  declarations: [
		ListOfCoinsComponent,
		HomePageComponent,
		FavouriteCoinsComponent
	]
})
export class MainPageModule { }
