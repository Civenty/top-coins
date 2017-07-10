import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListOfCoinsComponent } from '../list-of-coins/list-of-coins.component';

import { CoinsDataService } from '../services/coins-data/coins-data.service';
import { SelectedCoinsService } from '../services/selected-coins/selected-coins.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SelectedCoinsService]
})
export class HomePageComponent implements OnInit {
  private listOfelectedfcoins = [];
	private originListOfcoins: Array<any> = [];
	private listOfcoins: Array<any> = [];

  constructor(
		private route: ActivatedRoute,
		private router: Router,		
		private selectedCoinsService: SelectedCoinsService,
		private coinsDataService: CoinsDataService
	) {
    selectedCoinsService.selectedCoins$.subscribe((state) => {
      this.listOfelectedfcoins = state;
    });
  }

  ngOnInit() {
		this.coinsDataService
			.getCoinsList()
			.then(response => this.coinsDataResponseHandler(response));		
  }

	coinsDataResponseHandler(response): void {
		const queryCoins = this.route.snapshot.queryParams.coins;
		const savedModel = queryCoins && queryCoins.split(',') || [];

		this.listOfcoins = Array.isArray(response) && response || [];
		this.originListOfcoins = Array.isArray(response) && response || [];

		this.selectedCoinsService.selectedCoins$.subscribe(data => {
			this.router.navigate([''], {queryParams: {coins: data.map(coin => coin.rank).join()}});
		});		

		if (savedModel.length) {
			// this.selectedCoinsService
			// 	.setCoins(this.originListOfcoins.filter(coin => this.listOfcoinsModel[coin.rank]));
		}	else {
			// this.filterModel['coins-filter'] = 'top-10-filter';
						
			// this.filterBy('top-10-filter');
		}
	}

	toggleCoin($event) {
		this.selectedCoinsService.toggleCoin($event.coin, $event.state);
	}

  deleteSelectedCoin($event) {
    this.selectedCoinsService.removeCoin($event);
    this.selectedCoinsService.emitCoinInfo($event);
  }
}
