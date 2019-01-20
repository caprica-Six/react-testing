import { SAVE_COMMENT } from 'actions/types';

// create he actioncreator

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        paylod: comment
    };
}