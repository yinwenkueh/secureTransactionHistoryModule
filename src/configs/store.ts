import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import transactionReducer from '../reducers/transactionReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
