// class para consumir os endpoints firebase
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAsoZznz4dHNtXskRQVJah_c16gKsU38a4",
    authDomain: "cidadania-italiana-9d3a1.firebaseapp.com",
    databaseURL: "https://cidadania-italiana-9d3a1.firebaseio.com",
    projectId: "cidadania-italiana-9d3a1",
    storageBucket: "cidadania-italiana-9d3a1.appspot.com",
    messagingSenderId: "55988393804"
  };
firebase.initializeApp(config);

export default firebase;