import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoinsDataService {
	private coinsListUrl: string = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';

  constructor(
		private http: Http
	) { }

	getCoinsList(): Promise<any> {
		return this.http
			.get(this.coinsListUrl)
			.toPromise()
			.then(response => response.json());
	}
}
