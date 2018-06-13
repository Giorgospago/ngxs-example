import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blockchain } from '../reducers/blockchain/blockchain.model';
import { Store } from '@ngxs/store';
import { AddBlockchain } from '../reducers/blockchain/blockchain.actions';

@Component({
   selector: 'app-blockchain',
   templateUrl: './blockchain.component.html',
   styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

    form: FormGroup;

    constructor(
        private store: Store,
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            price: ['', Validators.required]
        });
    }

    addCoin(name, price) {
        this.store.dispatch(new AddBlockchain(<Blockchain>{
            name: name,
            price: price
        }));

        // TIP: in store.dispatch we can send [] with multiple actions
        // this.store.dispatch([
        //     new AddBlockchain(<Blockchain>{
        //         name: name,
        //         price: price
        //     }),
        //     new AddBlockchain(<Blockchain>{
        //         name: name,
        //         price: price
        //     })
        // ]);
    }

    ngOnInit() {
    }

}
