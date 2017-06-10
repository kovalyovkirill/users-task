/**
 * Created by kirill on 05.06.2017.
 */
import {SET_USERS, GET_ALBUMS, GET_PHOTOS} from '../actions';

export default function users(state = {users: [], albums: [], photos: [], userId: null, albumId: null}, action) {
    switch (action.type) {
        case GET_ALBUMS:
            return Object.assign({}, state, {
                albums: action.albums,
                userId: action.userId
            });
        case SET_USERS:
            console.log(action.users);

            return Object.assign({}, state, {
                users: action.users
            });
        case GET_PHOTOS:
            return Object.assign({}, state, {
                photos: action.photos,
                albumId: action.albumId
            });
        default:
            return state;
    }
}