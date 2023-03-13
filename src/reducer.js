import { API_FETCHING_FAILURE } from "./action";
import { API_FETCHING_START } from "./action";
import { API_FETCHING_SUCCESS } from "./action";


const initialState = {
    facts: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case API_FETCHING_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };

        case API_FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                facts: action.payload,
                error: ''
            };
            case API_FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
    
}