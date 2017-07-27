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

  constructor(
		private http: Http
	) { }

	recieveData(url: string): Promise<any> {
		return this.http
			.get(url)
			.toPromise()
			.then(response => response.json());
	}

	getCoinsList(): Promise<any> {
		return this.coinsListCache.data || 
			this.recieveData(this.coinsListUrl)
				.then(res => this.coinsListCache.data = Observable.of(res).toPromise());
	}

	getCoinData(coinSymbol: string): Promise<any> {
		return this.coinDataCache[coinSymbol] ||
			this.recieveData(`${this.coinDataUrl}${coinSymbol}`)
				.then(res => this.coinDataCache[coinSymbol] = Observable.of(res).toPromise());
	}
}
