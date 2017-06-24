import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {

  constructor(
		private route: ActivatedRoute,
		private location: Location
	) { }

  ngOnInit() {
		this.route.params
			.switchMap((params: Params) => new Observable(params => console.log(params)))
			.subscribe(p => alert(p));
  }

	// ngOnChange() {
	// 	this.route.params
	// 		.switchMap((params: Params) => new Observable(params => console.log(params)));		
	// }

}
