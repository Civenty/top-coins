import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoinHistoryService {
	private dataUrl = 'https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=2000&aggregate=20&e=CCCAGG';

  constructor(private http: Http) { }

	getCoinHistory():Promise<any> {
		return this.http
			.get(this.dataUrl)
			.toPromise()
			.then(response => response.json());
	}
}
