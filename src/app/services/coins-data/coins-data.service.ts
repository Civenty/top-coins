import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoinsDataService {
	private coinsListUrl: string = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
	private coinDataUrl: string = 'http://www.coincap.io/page/';
	private coinDataHistoryUrl: string = 'http://www.coincap.io/history/1day/';	

  constructor(
		private http: Http
	) { }

	getCoinsList(): Promise<any> {
		return this.http
			.get(this.coinsListUrl)
			.toPromise()
			.then(response => response.json());
	}

	getCoinData(coinSymbol: string): Promise<any> {
		return this.http
			.get(`${this.coinDataUrl}${coinSymbol}`)
			.toPromise()
			.then(response => response.json());		
	}
}
