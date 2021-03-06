import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoinDetailRoutingModule } from './coin-detail-routing/coin-detail-routing.module';

import { CoinDetailComponent } from './coin-detail.component';
import { TabSwitcherComponent } from '../tab-switcher/tab-switcher.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoinDetailRoutingModule
  ],
  declarations: [
    CoinDetailComponent,
    TabSwitcherComponent
  ]
})
export class CoinDetailModule { }
