import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyB_76tIjQ8fZmyyg2XiaGKHnrkizWQHO9A",
  authDomain: "recipeapp-38d59.firebaseapp.com",
  databaseURL: "https://recipeapp-38d59.firebaseio.com",
  projectId: "recipeapp-38d59",
  storageBucket: "recipeapp-38d59.appspot.com",
  messagingSenderId: "610187277934"
};
firebase.initializeApp(config);

export default firebase;
