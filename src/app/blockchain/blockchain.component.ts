import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blockchain } from '../reducers/blockchain/blockchain.model';

@Component({
   selector: 'app-blockchain',
   templateUrl: './blockchain.component.html',
   styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

   form: FormGroup;
   constructor(
      private store: Store<AppState>,
      private fb: FormBuilder) {
      this.createForm();
   }

   createForm() {
      this.form = this.fb.group({
         name: ['', Validators.required],
         price: ['', Validators.required]
      });
   }

   addCoin(name, price) {
      this.store.dispatch({
         type: 'ADD_COIN',
         payload: <Blockchain>{
            name: name,
            price: price
         }
      });
   }

   ngOnInit() {
   }

}
