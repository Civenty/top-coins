import { Component, OnInit } from '@angular/core';
import { CoinsDataService } from '../services/coins-data/coins-data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
		private coinsDataService: CoinsDataService,
		private route: ActivatedRoute,
		private router: Router
	) { }

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
		if ($event) {
			this.listOfelectedfcoins.push(coin);
			this.listOfelectedfcoins.sort((a, b) => this.compare.compareValues(a.rank, b.rank));
		} else {
			this.listOfelectedfcoins = this.listOfelectedfcoins.filter(selectedCoin => coin.name !== selectedCoin.name);
		}
		
		this.filterModel['coins-filter'] = '';

		setTimeout(() => {
			this.router.navigate([''], {queryParams: {coins: this.listOfelectedfcoins.map(coin => coin.rank).join()}});
		}, 0);
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

		this.onModelChange(false, coin);
	}

	filterByTop(top: number = 0): void {
		let pos = 0;
		const limit = top;

		this.listOfcoinsModel = {};
		this.listOfelectedfcoins = [];

		for (pos; pos < limit; pos++) {
			this.listOfcoinsModel[this.originListOfcoins[pos].rank] = true;

			this.listOfelectedfcoins.push(this.originListOfcoins[pos]);
			this.router.navigate([''], {queryParams: {coins: this.listOfelectedfcoins.map(coin => coin.rank).join()}});
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
			this.listOfelectedfcoins = this.originListOfcoins.filter(coin => this.listOfcoinsModel[coin.rank]);
		}	else {
			this.filterModel['coins-filter'] = 'top-10-filter';
						
			this.filterBy('top-10-filter');
		}
	}

	getBadgeCls(coinVal: number): string {
		return `badge ${coinVal > 0 ? 'badge-success' : 'badge-danger'}`;
	}

	clearQuery(): void {
		this.listOfcoinsModel['search-coin'] = "";

		this.searchCoin("");
	};
}
