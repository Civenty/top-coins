import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-coins-chart',
  templateUrl: './top-coins-chart.component.html',
  styleUrls: ['./top-coins-chart.component.css']
})
export class TopCoinsChartComponent implements OnInit {
	@Input() topCoins: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

	ngOnChanges() {
		this.barChartLabels = this.topCoins.slice(0, 10).map(coin => coin.symbol);
		this.coinsChartData = [{data: this.topCoins.slice(0, 10).map(coin => coin.price_usd), label: ""}];
	}

	private coinsChartData: Array<any> = [{data: [], label: ''}];
  private barChartLabels:Array<any> = [];
  
	public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barDoughnutType:string = 'doughnut';
  public barChartLegend:boolean = false;
  public doughnutLegend:boolean = true;
}
