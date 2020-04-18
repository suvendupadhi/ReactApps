import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjVDJOT2b-JHYdDTYptvPu4IN93iuyZBs",
  authDomain: "gapa-sapa.firebaseapp.com",
  databaseURL: "https://gapa-sapa.firebaseio.com",
  projectId: "gapa-sapa",
  storageBucket: "gapa-sapa.appspot.com",
  messagingSenderId: "221581373343",
  appId: "1:221581373343:web:e2f78c4bb110c30520d7aa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
