import {combineReducers} from 'redux';
import AuthReducer from './auth';
import GifReducer from './gifs';
import ModalReducer from './modal';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
    auth: AuthReducer,
    form: FormReducer,
    gifs: GifReducer,
    modal: ModalReducer,
    router: routerReducer
});

export default rootReducer;
