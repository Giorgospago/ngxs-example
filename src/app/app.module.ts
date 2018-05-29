import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { addCoinReducer } from './reducers/blockchain/blockchain.reducer';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';

@NgModule({
   declarations: [
      AppComponent,
      BlockchainComponent,
      DisplayComponent
   ],
   imports: [
      BrowserModule,
      NgbModule.forRoot(),
      StoreModule.forRoot({ blockchain: addCoinReducer }),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
