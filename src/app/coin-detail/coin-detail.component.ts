import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { CoinHistoryService } from '../services/coin-history/coin-history.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css'],
	providers: [ CoinHistoryService ]
})
export class CoinDetailComponent implements OnInit {

  constructor(
		private route: ActivatedRoute,
		private location: Location,
		private coinHistoryService: CoinHistoryService
	) { }

	private lineChartData: Array<any> = [
		{data: [], label: ''}
	];
	private lineChartLabels:Array<any> = [];
  private lineChartOptions:any = {
    responsive: true,
		scales: {
			xAxes: [{
					display: false
			}]
		}		
  };
	private lineChartLegend: boolean = false;
	public lineChartType:string = 'line';

  ngOnInit() {
		this.route.params
			.switchMap((params: Params) => new Observable(params => console.log(params)))
			.subscribe(p => alert(p));

		this.coinHistoryService
			.getCoinHistory()
			.then(data => this.coinHistorySuccessHandler(data));
  }

	coinHistorySuccessHandler(response) {
		const timeStatistic = response.Data.map(function (coinInfo) {
			let d = new Date();

			d.setMilliseconds(coinInfo.time);
			
			return d.toString();
		});

		console.log(response.Data.map(response => response));
		
		this.lineChartData = [
			{data: response.Data.map(response => response.close), label: ''}
		];

		this.lineChartLabels = timeStatistic;

		console.log(timeStatistic);
	}

	// ngOnChange() {
	// 	this.route.params
	// 		.switchMap((params: Params) => new Observable(params => console.log(params)));		
	// }

}
