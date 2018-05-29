import { Blockchain, BlockchainState, BlockchainActions } from './../blockchain/blockchain.model';
import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export const initialState: BlockchainState = {
   blockchain: [
      {
         name: 'Bitcoin',
         price: 7000
      }
   ]
};

export function addCoinReducer(state: Blockchain[] = initialState.blockchain, action: BlockchainActions): Blockchain[] {
   switch (action.type) {
      case ADD_COIN:
         return [...state, action.payload];
      default:
         return state;
   }
}
