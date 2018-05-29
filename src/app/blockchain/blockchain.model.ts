import { Action } from '@ngrx/store';
export interface Blockchain {
   name: string;
   price: number;
}

export interface BlockchainState {
   readonly blockchain: Blockchain[];
}

export interface BlockchainActions extends Action {
   payload: Blockchain;
}
