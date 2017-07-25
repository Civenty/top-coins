import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../main-page/home-page/home-page.component';
import { CoinDetailComponent } from '../coin-detail/coin-detail.component'

const routes: Routes = [
	{
		path: 'detail/:coin-name',
		component: CoinDetailComponent
	},
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
  imports: [
		RouterModule.forRoot(routes)
  ],
	exports: [ RouterModule ]
})

export class RoutingModule { }
