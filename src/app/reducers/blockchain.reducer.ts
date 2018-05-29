import * as Blockchain from './../blockchain/blockchain.model';
import { Action } from '@ngrx/store';

export const initialState: Blockchain.BlockchainState = {
   blockchain: [
      {
         name: 'Bitcoin',
         price: 7000
      }
   ]
};

export function addCoinReducer( state: Blockchain.Blockchain[] = initialState.blockchain, action: Blockchain.BlockchainActions ): Blockchain.Blockchain[] {
   switch (action.type) {
      case Blockchain.ADD_COIN:
         return [...state, action.payload];
      default:
         return state;
   }
}
