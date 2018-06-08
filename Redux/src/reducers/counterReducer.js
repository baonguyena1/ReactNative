import {INCREASE, DECREASE} from '../actions/type';

const intialState = 0;

export default func (state = intialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE: 
            return state - 1;
        default:
            return state;    
    }
}