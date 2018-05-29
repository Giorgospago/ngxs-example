import * as Blockchain from './../blockchain/blockchain.model';
import * as BlockchainActions from './../blockchain/blockchain.actions';
import { Action } from '@ngrx/store';
import { AppState } from '../app.state';

export const initialState: AppState = {
   blockchain: [
      {
         name: 'Bitcoin',
         price: 7000
      }
   ]
};

export function addCoinReducer(state: Blockchain.Blockchain[] = initialState.blockchain, action: BlockchainActions.Actions ): Blockchain.Blockchain[] {
   switch (action.type) {
      case Blockchain.ADD_COIN:
         return [...state, action.payload];
      default:
         return state;
   }
}
