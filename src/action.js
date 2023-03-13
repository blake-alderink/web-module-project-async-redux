import axios from 'axios';

export const API_FETCHING_FAILURE = 'API_FETCHING FAILURE';
export const API_FETCHING_SUCCESS = 'API_FETCHING_SUCCESS';
export const API_FETCHING_START = 'API_FETCHING_START';

export const apiFetch = () => dispatch => {
    dispatch({type: API_FETCHING_START});
axios.get('https://catfact.ninja/facts?limit=20')
.then(res => dispatch({type: API_FETCHING_SUCCESS, payload: res.data.data}))
.catch(err => console.log(err))
}
