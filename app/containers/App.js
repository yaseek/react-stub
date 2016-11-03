import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Root from '../components/Root'
import News from '../containers/News'
import Vacancy from '../components/Vacancy'
import NotFound from '../components/NotFound'


//const routes = (
//)

function mapStateToProps (state) {
  return {
    news: state.news
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //newsActions: bindActionCreators(newsActions, dispatch)
  }
}

class App extends Component {
  render() {
    //return <div>Привет из App, { this.props.user }!</div>
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>

          <IndexRoute component={News}/>

          <Route path="/news" component={News} />
          <Route path="/vacancy" component={Vacancy}/>

          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

