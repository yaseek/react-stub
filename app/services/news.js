import request from 'axios';

import config from '../config/config.yaml'

import RestService from './RestService'
import { $log } from './log'

export default new RestService(config.api.API_BASE_URL + '/news')
