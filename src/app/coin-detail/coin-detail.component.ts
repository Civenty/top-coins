import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CoinsDataService } from '../services/coins-data/coins-data.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
	lineChartType = 'line';
	lineChartData = [
		{data: [], label: ''}
	];
	lineChartLabels = [];

	hasData = false;
	showLoader = false;

	tabs = [
		{
			id: 'all',
			title: 'all',
			checked: false
		},
		{
			id: 'oneday',
			title: '1 day',
			checked: true			
		},
		{
			id: 'sevendays',
			title: '7 days'
		}		
	];

  lineChartOptions:any = {
		responsive: true,
		legend: {
			display: false	
		},
		scales: {
			xAxes: [{
				display: false
			}]
		}
	};	
	
	coinProps: any = {
		cap24hrChange: '',
		explorerURL: '',
		homeURL: '',
		isBuy: false,
		name: '',
		mineable: '',
		perc: '',
		position24: '',
		published: '',
		usdPrice: '',
		usdVolume: '',
		vwapDataBTC: ''
	};

	constructor(
		private route: ActivatedRoute,
		private router: Router,		
		private coinsDataService: CoinsDataService,
		private location: Location
	) {
		this.toggleLoader(true);

		this.coinsDataService
			.getCoinData(route.snapshot.params['coin-name'])
			.then(response => this.coinDetailsResponseHandler(response));		
			// .then(response => console.log(response.display_name));		
	}

	setPriceData(priceData: Array<any> = []) {
		let d = null;

		this.lineChartData[0].data = [];
		this.lineChartLabels = [];

		if (Array.isArray(priceData)) {
			priceData.forEach((price, pos) => {
				d = new Date(price[0]);

				if (pos % 20 == 0) {
					this.lineChartData[0].data.push(price[1]);
					this.lineChartLabels.push(d);
				}
			});
		}
	}

	setCoinProps(coinData: any) {
		this.coinProps.cap24hrChange =  coinData.cap24hrChange;
		this.coinProps.explorerURL =  coinData.explorerURL;
		this.coinProps.homeURL =  coinData.homeURL;
		this.coinProps.isBuy =  coinData.isBuy;
		this.coinProps.long =  coinData.long;
		this.coinProps.mineable =  coinData.mineable;
		this.coinProps.perc =  coinData.perc;
		this.coinProps.position24 =  coinData.position24;
		this.coinProps.published =  coinData.published;
		this.coinProps.usdPrice =  coinData.usdPrice;
		this.coinProps.usdVolume =  coinData.usdVolume;
		this.coinProps.vwapDataBTC =  coinData.vwapDataBTC;
	}

	coinDetailsResponseHandler(response) {
		this.toggleLoader(false);
		
		if (response && response.price) {
			this.setPriceData(response.price);
			this.setCoinProps(response);
		} else {
			this.hasData = true;
		}
	}

  ngOnInit() {
	}

	changeTab($event) {
		this.coinsDataService
			.getCoinData(this.route.snapshot.params['coin-name'])
			.then(response => this.coinDetailsResponseHandler(response));			
	}
	
	goBack(): void {
		this.location.back();
	}

	toggleLoader(state: boolean) {
		this.showLoader = state;
	}

}
