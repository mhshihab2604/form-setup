import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB9dpR105tCtCVLMn-7qVKNc0qNLv_xc3Y",
  authDomain: "form-setup-91edb.firebaseapp.com",
  projectId: "form-setup-91edb",
  storageBucket: "form-setup-91edb.appspot.com",
  messagingSenderId: "288851020147",
  appId: "1:288851020147:web:222fb188fec193a92a9d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
