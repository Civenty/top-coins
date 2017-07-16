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

	hasData = false;

  constructor(
		private route: ActivatedRoute,
		private router: Router,		
		private coinsDataService: CoinsDataService,
		private location: Location
	) {
		this.coinsDataService
			.getCoinData(route.snapshot.params['coin-name'])
			.then(response => this.coinDetailsResponseHandler(response));		
	}

	setPriceData(priceData: Array<any>) {
		priceData.forEach((price, pos) => {
			if (pos % 50 == 0) {
				this.lineChartData[0].data.push(price[1]);
				this.lineChartLabels.push(price[0]);
			}
		});
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
		if (response && response.price) {
			this.setPriceData(response.price);
			this.setCoinProps(response);
		} else {
			this.hasData = true;
		}
	}

  ngOnInit() {
	}
	
	goBack(): void {
		this.location.back();
	}

}
