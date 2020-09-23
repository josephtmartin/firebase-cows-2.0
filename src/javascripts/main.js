import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/apikeys.json';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
};

init();
