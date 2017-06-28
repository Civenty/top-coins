import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoinDetailComponent } from '../coin-detail/coin-detail.component';

const routes: Routes = [
	{path: "detail/:coin", component: CoinDetailComponent}
];

@NgModule({
  imports: [
		RouterModule.forRoot(routes)
  ],
	exports: [ RouterModule ]
})

export class RoutingModule { }
