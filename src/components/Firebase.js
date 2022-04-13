import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAzGegUlxABC-R1r1Iisp_u6XivB2W4eoQ",
    authDomain: "arthub-aa0c4.firebaseapp.com",
    projectId: "arthub-aa0c4",
    storageBucket: "arthub-aa0c4.appspot.com",
    messagingSenderId: "101861499403",
    appId: "1:101861499403:web:ab73e4decce37901191d0e",
    measurementId: "G-9K0QKS3T2E"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export{storage,firebase as default};