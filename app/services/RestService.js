
import request from 'axios';

import { $log } from './log'

function contentToJson (out) {
  var data;
  try {
    data = JSON.parse(out);
  } catch (e) {
    data = out;
  }
  $log.debug('TRANS', data)
  return data;
}

var transformers = [
  contentToJson
]

export default class RestService {

  constructor (url) {
    this._url = url
  }

  get (query) {
    return request.get(this._url, {
      params: query,
      //transformResponse: transformers
    })
  }

}