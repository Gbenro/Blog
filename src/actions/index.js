import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/post')
  dispatch({ tpe: 'FETCH_POST', payload: response })
}
