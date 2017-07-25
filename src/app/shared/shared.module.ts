import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CoinsDataService } from '../services/coins-data/coins-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CoinsDataService,
    CookieService
  ],
  exports: [
    CommonModule,
    ChartsModule,
		HttpModule,
		NgbModule,
    RouterModule,
		FormsModule
  ],
  declarations: []
})
export class SharedModule { }
