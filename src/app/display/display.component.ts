import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Blockchain } from '../reducers/blockchain/blockchain.model';

@Component({
   selector: 'app-display',
   templateUrl: './display.component.html',
   styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

   coins: Observable<Blockchain[]>;
   constructor(private store: Store<AppState>) {
      this.coins = this.store.select(state => state.blockchain);
   }

   ngOnInit() {
   }

}
