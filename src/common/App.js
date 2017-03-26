import React, { Component, PropTypes } from 'react';
// import Navbar from './Navbar';
import {connect} from 'react-redux';
import { requestUser } from '../data/user/actions';
import { axioss } from './config';
import { View } from 'react-native';
import { getStorage, storee } from './helpers/storage';
import { Actions } from 'react-native-router-flux';
import { signinUserByToken } from '../pages/auth/redux/actions';

// import Router from './router';
import { Tabs } from './router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.signinUserByToken();
      
    //   dis
    // let currentUser = getStorage('currentUser');
    // debugger;
    // this.props.requestUser('105');
    
    // document.addEventListener('keyup', (e) => {
    //   if (e.key === '`') {
    //     let button = document.getElementsByClassName('btn-cron-btn')[0];
    //     button.style.visibility = button.style.visibility === 'hidden' ? 'visible' : 'hidden';
    //   }
    // });
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.authenticated !== this.props.authenticated) {

      // this.props.requestUser(getStorage('currentUser'));      
    // }
  }

  handleClick() {
    // axioss.post(`cron`);
  }

  render() {
        // <Navbar />
        // <button onClick={this.handleClick.bind(this)} style={{visibility: 'hidden'}} className="btn-cron-btn">Next Day</button>
        // {this.props.children}
        // debugger;
    return(
      <Tabs />
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  requestUser: payload => dispatch(requestUser(payload)),
  signinUserByToken: payload => dispatch(signinUserByToken(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);