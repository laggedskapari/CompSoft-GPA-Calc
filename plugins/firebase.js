import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfiguration = {
  apiKey: "AIzaSyBrh-ho8iTQ80zF-dM69Twnk11VoQPHljM",
  authDomain: "compsoft-gpa-calc.firebaseapp.com",
  projectId: "compsoft-gpa-calc",
  storageBucket: "compsoft-gpa-calc.appspot.com",
  messagingSenderId: "659798747336",
  appId: "1:659798747336:web:669988f2f44d0b77415dfd"
}

let app ;
const Apps = getApps();
if(!Apps.length){
  app = initializeApp(firebaseConfiguration);
}else {
  app = Apps[0];
}

export const Authenticator = getAuth(app, {});
export const Database = getFirestore(app, {});
