import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import reducer from './reducers';
import { logUser } from './actions';
import './App.css';

const store = createStore(reducer);
firebaseApp.auth().onAuthStateChanged( user => {
  if (user) {
    console.log('user signed in or up', user);
    store.dispatch(logUser(user.email));
    browserHistory.push('/app');
  } else {
    console.log('user signed out or needs to sign in');
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store = { store }>
    <Router path = '/' history = { browserHistory }>
      <Route path = '/app' component = { App }/>
      <Route path = '/signin' component = { SignIn }/>
      <Route path = '/signup' component = { SignUp }/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
