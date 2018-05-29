import { Action } from '@ngrx/store';
export interface Blockchain {
   name: string;
   price: number;
}

export interface BlockchainState {
   readonly blockchain: Blockchain[];
}

export const ADD_COIN = 'ADD_COIN';

