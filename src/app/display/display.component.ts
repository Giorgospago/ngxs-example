import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { RemoveBlockchain } from '../reducers/blockchain/blockchain.actions';
import { Blockchain } from '../reducers/blockchain/blockchain.model';

@Component({
   selector: 'app-display',
   templateUrl: './display.component.html',
   styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    @Select() coins$; // It has the same name of state (NGXS ignores the $)
    // @Select(state => state.coins) coins$; // The same thing but we can use diff name in our Observable

    constructor(private store: Store)
    {}

    ngOnInit() {
    }

    removeCoin(name) {
        this.store.dispatch(new RemoveBlockchain(<Blockchain>{
            name: name
        }));
    }
}
