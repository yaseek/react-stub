import React from "react";
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import DevTools from './utils/devTools.jsx';

import Root from './routes/root.jsx';
import News from './routes/news.jsx';
import Vacancy from './routes/vacancy.jsx';
import NotFound from './routes/not-found.jsx';

console.log('ok')

require('../less/app.less')

render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>

      <IndexRoute component={News}/>

      <Route path="/news" component={News}/>
      <Route path="/vacancy" component={Vacancy}/>

      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementsByTagName('app').item(0));