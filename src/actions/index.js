import { SAVE_COMMENT } from 'actions/types';

// create the Action Creator

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        paylod: comment
    };
}