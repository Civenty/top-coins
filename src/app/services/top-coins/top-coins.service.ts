import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopCoinsService {
	private dataUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=50';

  constructor(private http: Http) { }

	getData(): Promise<any> {
		return this.http
			.get(this.dataUrl)
			.toPromise()
			.then(response => response.json());
	}

}
