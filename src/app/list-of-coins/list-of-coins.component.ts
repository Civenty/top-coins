import { Component, OnInit } from '@angular/core';
import { CoinsDataService } from '../services/coins-data/coins-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-of-coins',
  templateUrl: './list-of-coins.component.html',
  styleUrls: ['./list-of-coins.component.css']
})
export class ListOfCoinsComponent implements OnInit {
  constructor(
		private coinsDataService: CoinsDataService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	private originListOfcoins: Array<any> = [];
	private listOfcoins: Array<any> = [];
	private listOfelectedfcoins: Array<any> = [];
	public loader: boolean = false;
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
		} else {
			this.listOfelectedfcoins = this.listOfelectedfcoins.filter(selectedCoin => coin.name !== selectedCoin.name);
		}

		setTimeout(() => {
			this.router.navigate([''], {queryParams: {coins: this.listOfelectedfcoins.map(coin => coin.rank).join()}});
		}, 0);
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

	filterBy(filterName: string): void {
		if (filterName === "top20") {
			let pos = 0;
			const limit = 10;

			this.listOfcoinsModel = {};
			this.listOfelectedfcoins = [];

			for (pos; pos < limit; pos++) {
				this.listOfcoinsModel[this.originListOfcoins[pos].rank] = true;
				this.onModelChange(true, this.originListOfcoins[pos]);
			}
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
		}		
	}

	getBadgeCls(coinVal: number): string {
		return `badge ${coinVal > 0 ? 'badge-success' : 'badge-danger'}`;
	}

	clearQuery(): void {
		if (this.listOfcoinsModel['search-coin']) {
			this.listOfcoinsModel['search-coin'] = "";
		}

		this.searchCoin("");
	}
}
