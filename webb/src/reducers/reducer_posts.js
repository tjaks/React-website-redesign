import _ from 'lodash';
import { FETCH_POSTS, CREATE_POSTS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case CREATE_POSTS:

        default:
            return state;
    }
}