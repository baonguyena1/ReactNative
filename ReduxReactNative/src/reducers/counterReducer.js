import { INCREASE, DECREATE } from "../actions/type";

const intialState = 0;

export default function (state = intialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREATE:
            return state - 1;
        default:
            return state;
    }
}