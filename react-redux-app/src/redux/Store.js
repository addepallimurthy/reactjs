import { Provider } from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {cakeReducer,iceCreamReducer} from './Reducers'

const store = createStore(combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
}));


const StoreProvider = props => (
	<Provider store={store}>{props.children}</Provider>
)

export default StoreProvider;