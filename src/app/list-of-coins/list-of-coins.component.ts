import { Component, OnInit } from '@angular/core';
import { CoinsDataService } from '../services/coins-data/coins-data.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-list-of-coins',
  templateUrl: './list-of-coins.component.html',
  styleUrls: ['./list-of-coins.component.css']
})
export class ListOfCoinsComponent implements OnInit {
  constructor(
		private coinsDataService: CoinsDataService,
		private cookieService: CookieService
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
			this.cookieService.put("listOfcoinsModel", JSON.stringify(this.listOfcoinsModel));			
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

	deleteSelectedCoin(coin): void {
		this.listOfcoinsModel[coin.id] = false;

		this.onModelChange(false, coin);
		this.cookieService.put("listOfcoinsModel", JSON.stringify(this.listOfcoinsModel));
	}

	coinsDataResponseHandler(response): void {
		var start = new Date();

		const savedModel = this.cookieService.get("listOfcoinsModel");
		this.listOfcoins = Array.isArray(response) && response || [];
		this.originListOfcoins = Array.isArray(response) && response || [];

		if (savedModel) {
			this.listOfcoinsModel = JSON.parse(savedModel);
			this.listOfcoinsModel['search-coin'] = "";

			this.listOfelectedfcoins = this.originListOfcoins.filter(coin => this.listOfcoinsModel[coin.id]);
		}		

		var end = new Date();

		console.log("TIME", end.getTime() - start.getTime());
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
