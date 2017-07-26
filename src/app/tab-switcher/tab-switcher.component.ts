import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-switcher',
  templateUrl: './tab-switcher.component.html',
  styleUrls: ['./tab-switcher.component.css']
})
export class TabSwitcherComponent implements OnInit {
  @Input() tabs = [];
  @Output() changeTab:EventEmitter<any> = new EventEmitter();

  public switcherModel: any = {};

  constructor() { }

  ngOnInit() {
  }

	onSwitcherChange(tab): void {
    this.changeTab.emit(tab);
	}  
}
