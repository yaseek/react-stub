import React from "react";

import { Link } from 'react-router';

class Root extends React.Component {  

  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/news" activeStyle={{ color: 'red' }}>News</Link></li>
          <li><Link to="/vacancy" activeStyle={{ color: 'red' }}>Vacancy</Link></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
}

export default Root;