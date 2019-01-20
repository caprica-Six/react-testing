// return an array of strings
import { SAVE_COMMENT } from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            // take all the existing comments and add it to the new array 
            return [...state, action.payload];

        default: 
            return state;
    }
}