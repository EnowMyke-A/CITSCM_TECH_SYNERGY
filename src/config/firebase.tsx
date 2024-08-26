import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCzGcrPL7sPwxJ22oM1mcaiEHfXaO_twAA",
  authDomain: "citsm-94e76.firebaseapp.com",
  projectId: "citsm-94e76",
  storageBucket: "citsm-94e76.appspot.com",
  messagingSenderId: "657836409144",
  appId: "1:657836409144:web:249802d2411453856801cd",
  measurementId: "G-WMMKJNXEJH"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app)
const provider = new GoogleAuthProvider();

export {db,auth,storage,provider}
