import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoinsDataService } from '../services/coins-data/coins-data.service';
import { SelectedCoinsService } from '../services/selected-coins/selected-coins.service';

import { Compare } from '../helpers/compare';

@Component({
  selector: 'app-list-of-coins',
  templateUrl: './list-of-coins.component.html',
  styleUrls: ['./list-of-coins.component.css'],
	providers: [ Compare ]
})
export class ListOfCoinsComponent implements OnInit {

  constructor(
		private compare: Compare,
		private route: ActivatedRoute,
		private router: Router,
		private coinsDataService: CoinsDataService,
		private selectedCoinsService: SelectedCoinsService
	) {
		selectedCoinsService.selectedCoins$.subscribe(data => {
			this.router.navigate([''], {queryParams: {coins: data.map(coin => coin.rank).join()}});
		});

		selectedCoinsService.coinInfo$.subscribe(coin => {
			this.listOfcoinsModel[coin.rank] = false;
		});		
	}

	private originListOfcoins: Array<any> = [];
	private listOfcoins: Array<any> = [];
	private listOfelectedfcoins: Array<any> = [];
	public loader: boolean = false;
	public filterModel: any = {};
	public listOfcoinsModel: any = {
		'search-coin': ""
	};

  ngOnInit() {
		this.coinsDataService
			.getCoinsList()
			.then(response => this.coinsDataResponseHandler(response));
  }

	onModelChange($event, coin): void {
		this.filterModel['coins-filter'] = '';
		
		this.selectedCoinsService.toggleCoin(coin, $event);
	}

	onFilterChange($event): void {
		this.filterBy($event);
	}

	searchCoin(query: string): void {
		this.listOfcoins = this.originListOfcoins
			.filter(coin => {
				return coin.id.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 || 
					coin.name.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 ||
					coin.symbol.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 ||
					!query.length;
			});
	}

	deleteSelectedCoin(coin: any): void {
		this.listOfcoinsModel[coin.rank] = false;
	}

	filterByTop(top: number = 0): void {
		let pos = 0;
		let listOfelectedfcoins = [];
		const limit = top;

		this.listOfcoinsModel = {};

		for (pos; pos < limit; pos++) {
			this.listOfcoinsModel[this.originListOfcoins[pos].rank] = true;

			listOfelectedfcoins.push(this.originListOfcoins[pos]);
			this.router.navigate([''], {queryParams: {coins: this.listOfelectedfcoins.map(coin => coin.rank).join()}});
			this.selectedCoinsService.setCoins(listOfelectedfcoins);
		}
	}

	filterBy(filterName: string): void {
		if (filterName === "top-10-filter") {
			this.filterByTop(10);
		}

		if (filterName === "top-50-filter") {
			this.filterByTop(50);
		}		
	}

	
	coinsDataResponseHandler(response): void {
		const queryCoins = this.route.snapshot.queryParams.coins;
		const savedModel = queryCoins && queryCoins.split(',') || [];

		this.listOfcoins = Array.isArray(response) && response || [];
		this.originListOfcoins = Array.isArray(response) && response || [];

		if (savedModel.length) {
			savedModel.forEach(coinName => {
				this.listOfcoinsModel[coinName] = true;
			});

			this.listOfcoinsModel['search-coin'] = "";
			this.selectedCoinsService
				.setCoins(this.originListOfcoins.filter(coin => this.listOfcoinsModel[coin.rank]));
		}	else {
			// this.filterModel['coins-filter'] = 'top-10-filter';
						
			// this.filterBy('top-10-filter');
		}
	}

	clearQuery(): void {
		this.listOfcoinsModel['search-coin'] = "";

		this.searchCoin("");
	};
}
