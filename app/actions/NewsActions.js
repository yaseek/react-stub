/*
import { SAVE } from '../config/constants'

export function setYear(year) {

  return {
    type: SAVE,
    payload: year
  }

}
*/
/*
import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../config/constants'

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1,2,3,4,5]
      })
    }, 1000)
  }
}
*/
import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL
} from '../config/news-constants'

import news from '../services/news'

import { $log } from '../services/log'

export function getNews(query) {

  $log.debug('GET NEWS', arguments)

  return (dispatch) => {
    dispatch({ type: GET_NEWS_REQUEST })

    news.get(query)
      .then((out) => {
        $log.debug('DISP', out)
        dispatch({
          type: GET_NEWS_SUCCESS,
          payload: out.data
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_NEWS_FAIL,
          payload: err
        })
      })     
  }
}