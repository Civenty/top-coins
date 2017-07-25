import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './main-page-routing/main-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './home-page/home-page.component';
import { ListOfCoinsComponent } from './list-of-coins/list-of-coins.component';
import { FavouriteCoinsComponent } from './favourite-coins/favourite-coins.component';

@NgModule({
  imports: [
		CommonModule,
		SharedModule,
		RoutingModule
	],
  declarations: [
		ListOfCoinsComponent,
		HomePageComponent,
		FavouriteCoinsComponent
	]
})
export class MainPageModule { }
