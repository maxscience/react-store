import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA22XieiW7J7vtm25lwEhddY4HLO7Qrm8c',
  authDomain: 'reactstore-db921.firebaseapp.com',
  databaseURL: 'https://reactstore-db921.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

export default base;
