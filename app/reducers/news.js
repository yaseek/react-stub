import { 
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL
} from '../config/news-constants'

const initialState = {
  articles: []
}

export default function news(state = initialState, action) {

  switch (action.type) {
    case GET_NEWS_REQUEST:
      return { ...state }

    case GET_NEWS_SUCCESS:
      return { ...state, meta: action.payload.meta, articles: action.payload.result }

    default:
      return state;
  }

}