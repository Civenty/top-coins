import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SelectedCoinsService {
  private selectesCoinsSource = new BehaviorSubject<any>([]);
  private coinInfoSource = new BehaviorSubject<any>({});

  selectedCoins$ = this.selectesCoinsSource.asObservable();
  coinInfo$ = this.coinInfoSource.asObservable();

  public setCoins(coins: any) {
    this.selectesCoinsSource.next(coins);
  }

  public getCoins() {
    return this.selectesCoinsSource.getValue();
  }

  public addCoin(coin: any) {
    let coins = this.getCoins();

    coins.push(coin);
    this.selectesCoinsSource.next(coins);
    // listOfelectedfcoins.sort((a, b) => this.compare.compareValues(a.rank, b.rank));
  }

  public removeCoin(coin: any) {
    this.selectesCoinsSource
      .next(this.getCoins().filter(selectedCoin => coin.name !== selectedCoin.name));
  }

  public toggleCoin(coin: any, state: boolean) {
    if (state) {
      this.addCoin(coin);
    } else {
      this.removeCoin(coin);
    }    
  }


  // TODO temporary
  public emitCoinInfo(coin: any) {
    this.coinInfoSource.next(coin);
  }
}
