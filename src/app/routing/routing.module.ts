import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'detail/:coin-name',
		loadChildren: '../coin-detail/coin-detail.module#CoinDetailModule'
	},
	{
		path: '',
		loadChildren: '../main-page/main-page.module#MainPageModule'
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
