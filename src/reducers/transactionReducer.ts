import {SET_TRANSACTIONS} from '../actions/transactionAction';
import {Transaction} from '../types/types';

const initialState: Transaction[] = [];

const transactionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return action.payload;
    default:
      return state;
  }
};

export default transactionReducer;
