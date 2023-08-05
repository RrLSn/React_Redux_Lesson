import { FETCH_URL_ERROR, FETCH_URL_REQUEST, FETCH_URL_SUCCESS } from "./userType"

const initialState = {
    loading: true,
    users: [],
    error: ""
}


const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_URL_REQUEST: 
        return {
            ...state,
            loading: true
        }

        case FETCH_URL_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }

        case FETCH_URL_ERROR:
            return {
                loading:false,
                users:[],
                error: action.payload
            }
        default: return state
    }
}


export default Reducer