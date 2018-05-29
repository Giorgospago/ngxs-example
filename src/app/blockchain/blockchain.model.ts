import { Action } from '@ngrx/store';
export interface Blockchain {
   name: string;
   price: number;
}

export interface BlockchainState {
   readonly blockchain: Blockchain[];
}

export class BlockchainActions implements Action {
   readonly type = 'ADD_COIN';

   constructor(public payload: Blockchain) { }
}

export const ADD_COIN = 'ADD_COIN';
