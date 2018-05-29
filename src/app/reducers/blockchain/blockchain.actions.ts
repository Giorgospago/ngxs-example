import { Action } from '@ngrx/store';
import { Blockchain } from './blockchain.model';

export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';
export class BlockchainAddAction implements Action {
   readonly type = ADD_COIN;

   constructor(public payload: Blockchain) { }
}

export class BlockchainRemoveAction implements Action {
   readonly type = REMOVE_COIN;

   constructor(public payload: Blockchain) { }
}

export type Actions = BlockchainAddAction | BlockchainRemoveAction;
