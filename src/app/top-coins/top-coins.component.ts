import { Component, OnInit } from '@angular/core';
import { TopCoinsService } from '../services/top-coins/top-coins.service';

@Component({
  selector: 'app-top-coins',
  templateUrl: './top-coins.component.html',
  styleUrls: ['./top-coins.component.css'],
	providers: [TopCoinsService]
})
export class TopCoinsComponent implements OnInit {

  constructor(private topCoinsService: TopCoinsService) { }

  ngOnInit() {
		this.topCoinsService
			.getData()
			.then(data => this.topCoinsSuccessHandler(data));
  }

	private defaultSortBy:string = 'rank';
	private currentSortBy:string = 'rank';
	private isDescDirection:boolean = true;
	private topCoins: Array<any> = [];

	topCoinsSuccessHandler(data: Array<any> = []): void {
		this.topCoins = data;

		this.sortBy(this.defaultSortBy, !this.isDescDirection);
		this.getSortCls(this.defaultSortBy);
	}

	getBadgeCls(coinVal: number): string {
		return `badge ${coinVal > 0 ? 'badge-success' : 'badge-danger'}`;
	}

	compare(a, b, prop) {
		let start = a[prop];
		let end = b[prop];
		let result = 0;

		if (Number.isInteger(Number(start)) && Number.isInteger(Number(end))) {
			start = Number(start);
			end = Number(end);
		}

		if (typeof(start) === 'string' && typeof(end) === 'string') {
			start = String(start);
			end = String(end);
		}

		if (!isNaN(start) && start.toString().indexOf('.') != -1) {
				start = parseFloat(start);
				end = parseFloat(end);
		}​
		

		if (start < end) {
			result = -1;
		}

		if (start > end) {
			result = 1;
		}

		return result;
	}	

	compareStrategy(a, b, prop, isDescDirection) {
		return this.isDescDirection ? this.compare(a, b, prop) : this.compare(b, a, prop);
	}

	sortBy(sort, direction = this.isDescDirection) {
		this.isDescDirection = !direction;
		this.currentSortBy = sort;

		this.topCoins.sort( (a, b) => this.compareStrategy(a, b, this.currentSortBy, this.isDescDirection) );
		this.getSortCls
	}

	getSortCls(sort) {
		return sort === this.currentSortBy && !this.isDescDirection;
	}

	isCoinProfitable(coin) : boolean {
		return coin.percent_change_1h > 0 && coin.percent_change_24h > 0 && coin.percent_change_7d > 0;
	}
}
