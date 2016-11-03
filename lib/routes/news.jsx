import React from "react";

import request from 'axios';

import DevTools from '../utils/devTools.jsx'

class News extends React.Component {  

  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      medium_result: '',
      operation: '',
      data: {}
    };

    request.get('/api/v1/news')
      .then((out) => {
        this.state.data = out.data;
      })
    
  }
  
  render() {
    console.log('STATE', !!this.state.data, this.state)
    return (
      <div>
        <div> NEWS </div>
        <ul>
        {(this.state.data.result || []).forEach((item) => {
            <li>{item.title}</li>
          })
        }
        </ul>

        <DevTools></DevTools>

      </div>
    )
  }
}

export default News;