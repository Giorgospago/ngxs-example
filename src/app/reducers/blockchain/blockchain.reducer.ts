import { Blockchain } from './../blockchain/blockchain.model';
import * as BlockchainActions from './../blockchain/blockchain.actions';
import { Action } from '@ngrx/store';

export interface State {
   blockchain: Blockchain[];
}
export const initialState: State = {
   blockchain: [
      {
         name: 'Bitcoin',
         price: 7000
      }
   ]
};

export function addCoinReducer(state: Blockchain[] = initialState.blockchain, action: BlockchainActions.Actions ): Blockchain[] {
   switch (action.type) {
      case BlockchainActions.ADD_COIN:
         return [...state, action.payload];
      default:
         return state;
   }
}
