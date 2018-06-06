import {combineReducers} from 'redux';
import GifReducer from './gifs';
import ModalReducer from './modal';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: FormReducer,
    gifs: GifReducer,
    modal: ModalReducer,
    router: routerReducer
});

export default rootReducer;
