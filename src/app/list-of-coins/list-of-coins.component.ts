import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Compare } from '../helpers/compare';
import { Coin } from '../coin';

@Component({
  selector: 'app-list-of-coins',
  templateUrl: './list-of-coins.component.html',
  styleUrls: ['./list-of-coins.component.css'],
	providers: [ Compare ]
})
export class ListOfCoinsComponent implements OnInit {
	@Input() listOfcoins: Array<Coin> = [];
	@Input() selectedCoins: Array<Coin> = [];
	@Output() toggleCoin: EventEmitter<any> = new EventEmitter();
	@Output() updateSelectedCoins: EventEmitter<any> = new EventEmitter();

	originListOfcoins = [];
	public loader: boolean = false;
	public filterModel: any = {};
	public listOfcoinsModel: any = {
		'search-coin': ""
	};

  constructor(
		private compare: Compare
	) {}

  ngOnInit() {
  }

	ngOnChanges(changes: SimpleChanges) {	
		if (changes.listOfcoins) {
			this.originListOfcoins = changes.listOfcoins.currentValue.slice(0);
		}

		if (changes.selectedCoins) {
			this.listOfcoinsModel = {
				'search-coin': this.listOfcoinsModel['search-coin']
			};
			
			changes.selectedCoins.currentValue.forEach(coin => {
				this.listOfcoinsModel[coin.rank] = true;
			});
		}
	}

	onModelChange($event, coin: Coin): void {
		this.filterModel = {};

		this.toggleCoin.emit({state: $event, coin: coin});
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

	filterByTop(top: number = 0): void {
		let pos = 0;
		let listOfelectedfcoins = [];
		const limit = top;

		this.listOfcoinsModel = {};

		this.updateSelectedCoins.emit([]);

		for (pos; pos < limit; pos++) {
			this.listOfcoinsModel[this.originListOfcoins[pos].rank] = true;

			this.toggleCoin.emit({state: true, coin: this.originListOfcoins[pos]});
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
	
	clearQuery(): void {
		this.listOfcoinsModel['search-coin'] = "";

		this.searchCoin("");
	};
}
