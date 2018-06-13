import { Blockchain } from './reducers/blockchain/blockchain.model';
import { State, Action, StateContext } from '@ngxs/store';
import { AddBlockchain, RemoveBlockchain } from './reducers/blockchain/blockchain.actions';


@State<Blockchain[]>({
    name: 'coins',
    defaults: [
        {
            name: 'Bitcoin',
            price: 7000
        }
    ]
})
export class AppState {

    @Action(AddBlockchain)
    addBlockchain(context: StateContext<Blockchain[]>, action: AddBlockchain) {
        const state = context.getState();
        context.setState([...state, action.payload]);
    }

    @Action(RemoveBlockchain)
    removeBlockchain(context: StateContext<Blockchain[]>, action: RemoveBlockchain) {
        const state = context.getState();
        const index = state.findIndex(b => b.name === action.payload.name);
        if (index !== -1) {
            state.splice(index, 1);
            context.setState(state);
        }
    }
}
