import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as newsActions from '../actions/NewsActions'

import { $log } from '../services/log' 

class News extends Component {

  componentDidMount () {
    $log.debug('MOUNT NEWS', this.props, !!this.props.route.actions)

    if (this.props.actions) {
      this.props.actions.getNews()
    }
  }

  render() {
    //const { name } = this.props

    return <div>
      <p>ALL NEWS! </p>
      {this.props.articles.map(article => 
          <p key={article.uuid}>{article.title}</p>
        ) }
    </div>
  }
}

const 
  mapStateToProps = state => { 
    return { 
      articles: state.news.articles 
    } 
  },
  mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(newsActions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(News)
