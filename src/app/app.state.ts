import { Blockchain } from './reducers/blockchain/blockchain.model';

export interface AppState {
   readonly blockchain: Blockchain[];
}
