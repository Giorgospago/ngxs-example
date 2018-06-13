import { Blockchain } from './blockchain.model';

export class AddBlockchain {
   static readonly type = 'ADD_COIN';
   constructor(public payload: Blockchain) { }
}

export class RemoveBlockchain {
   static readonly type = 'REMOVE_COIN';
   constructor(public payload: Blockchain) { }
}
