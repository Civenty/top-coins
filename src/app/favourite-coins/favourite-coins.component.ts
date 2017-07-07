import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite-coins',
  templateUrl: './favourite-coins.component.html',
  styleUrls: ['./favourite-coins.component.css']
})
export class FavouriteCoinsComponent implements OnInit {
  @Input() listOfelectedfcoins = [];
  @Output() deleteSelectedCoin: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteSelected(coin: any) {
    this.deleteSelectedCoin.emit(coin);
  }

	getBadgeCls(coinVal: number): string {
		return `badge ${coinVal > 0 ? 'badge-success' : 'badge-danger'}`;
	}  
}
