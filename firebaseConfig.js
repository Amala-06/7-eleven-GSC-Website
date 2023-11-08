
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqUMOK9ba0vhZVNWJCIIUTmgDOSrjsWq8",
  authDomain: "contactpage-cce58.firebaseapp.com",
  projectId: "contactpage-cce58",
  storageBucket: "contactpage-cce58.appspot.com",
  messagingSenderId: "233631773304",
  appId: "1:233631773304:web:9fb3a8f62838696efc338d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);