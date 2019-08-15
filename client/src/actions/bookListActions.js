import axios from 'axios';

export const FETCH_WEBCAM_DATA_START = 'FETCH_BOOK_DATA_START';
export const FETCH_WEBCAM_DATA_SUCCESS = 'FETCH_BOOK_DATA_SUCCESS';
export const FETCH_WEBCAM_DATA_FAILURE = 'FETCH_BOOK_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_BOOK_DATA_START });
    axios
      .get('https://openlibrary.org/api/books?bibkeys=ISBN:9781594206757,ISBN:9780735219090&jscmd=data&format=json')
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_WEBCAM_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_WEBCAM_DATA_FAILURE, payload: err.response });
      });
  };
};