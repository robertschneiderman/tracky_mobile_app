import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Signout extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return(
      <div className="text-signout">
        Sorry to see you go...
      </div>
    );
  }
}

export default connect(null, actions)(Signout);