import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {cakeReducer} from './Reducers'

const store = createStore(cakeReducer);


const StoreProvider = props => (
	<Provider store={store}>{props.children}</Provider>
)

export default StoreProvider;