import { INCREMENT, DECREMENT } from "./actions";

const initState = {
    counter: 0
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case INCREMENT: {
            return {...state, counter: state.counter + 1}
        }
        case DECREMENT: {
            return {...state, counter: state.counter - 1}
        }
        default: {
            return state;
        }
    }
}

export default reducer;

