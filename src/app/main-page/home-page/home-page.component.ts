import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from '../coin';

import { CoinsDataService } from '../../services/coins-data/coins-data.service';
import { SelectedCoinsService } from '../../services/selected-coins/selected-coins.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SelectedCoinsService]
})
export class HomePageComponent implements OnInit {
  listOfelectedfcoins = [];
	originListOfcoins: Array<Coin> = [];
	listOfcoins: Array<Coin> = [];

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

	coinsDataResponseHandler(response: Array<Coin> = []): void {
		const queryCoins = this.route.snapshot.queryParams.coins;
		const savedModel = queryCoins && queryCoins.split(',') || [];

		this.listOfcoins = Array.isArray(response) && response || [];
		this.originListOfcoins = Array.isArray(response) && response || [];

		this.selectedCoinsService.selectedCoins$.subscribe(data => {
			this.router.navigate([''], {
				queryParams: {
					coins: data.map(coin => coin.rank).join()
				}
			});
		});		

		this.selectedCoinsService
			.setCoins(this.originListOfcoins.filter(coin => savedModel.indexOf(coin.rank) !== -1));
	}

	toggleCoin($event) {
		this.selectedCoinsService.toggleCoin($event.coin, $event.state);
	}

	updateSelectedCoins($event) {
		this.selectedCoinsService.setCoins([]);
	}

  deleteSelectedCoin($event) {
    this.selectedCoinsService.removeCoin($event);
  }
}
