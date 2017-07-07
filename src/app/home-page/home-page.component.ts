import { Component, OnInit } from '@angular/core';
import { ListOfCoinsComponent } from '../list-of-coins/list-of-coins.component';

import { SelectedCoinsService } from '../services/selected-coins/selected-coins.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SelectedCoinsService]
})
export class HomePageComponent implements OnInit {

  constructor(private selectedCoinsService: SelectedCoinsService) {
    selectedCoinsService.selectedCoins$.subscribe((state) => {
      this.listOfelectedfcoins = state;
    });
  }

  ngOnInit() {
  }

  public listOfelectedfcoins = [];

  deleteSelectedCoin($event) {
    this.selectedCoinsService.removeCoin($event);
    this.selectedCoinsService.emitCoinInfo($event);
  }
}
