import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';

@Injectable()
export class CoinsDataService {
	private coinsListUrl: string = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
	private coinDataUrl: string = 'http://www.coincap.io/page/';
	private coinDataHistoryUrl: string = 'http://www.coincap.io/history/1day/';	

	coinDataCache = {};
	coinsListCache = {data: null};
	getCoinDayHistoryCache = null;

  constructor(
		private http: Http
	) { }

	getCoinsList(): Promise<any> {
		let data = Observable.empty<any>().toPromise();

		if (this.coinsListCache.data) {
			this.coinsListCache.data = Observable.of(this.coinsListCache.data).toPromise();			
			data = this.coinsListCache.data;
		} else {
			data = this.http
				.get(this.coinsListUrl)
				.toPromise()
				.then(response => {
					this.coinsListCache.data = response.json();

					return this.coinsListCache.data;
				});
		}
		
		return data;
	}

	getCoinData(coinSymbol: string): Promise<any> {
		let data = Observable.empty<any>().toPromise();

		if (this.coinDataCache[coinSymbol]) {
			this.coinDataCache[coinSymbol] = Observable.of(this.coinDataCache[coinSymbol]).toPromise();
			data = this.coinDataCache[coinSymbol];
		} else {
			data = this.http
				.get(`${this.coinDataUrl}${coinSymbol}`)
				.toPromise()
				.then(response => {
					this.coinDataCache[coinSymbol] = response.json();

					return this.coinDataCache[coinSymbol];
				});		
		}

		return data;
	}

	getCoinDayHistory(coinSymbol: string) {
		let data = Observable.empty<any>().toPromise();

		if (this.coinDataCache) {
			data = Observable.of(this.coinDataCache).toPromise();
		} else {
			data = this.http
				.get(`${this.coinDataHistoryUrl}${coinSymbol}`)
				.toPromise()
				.then(response => {
					this.coinDataCache = response.json();

					return this.coinDataCache;
				});		
		}

		return data;
	}
}
