import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, OAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../config/firebase';
import { collection, onSnapshot,setDoc, addDoc, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

interface User {
    email: string;
    password: string;
}

async function signUp(email: string, password: string, additionalData: any) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      ...additionalData
    });

    console.log('User signed up and data stored in Firestore:', user.uid);
  } catch (error) {
    console.error('Error signing up:', error);
  }
}


async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      console.log('User data:', userDoc.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
}

async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date(),
      });
      console.log('New user document created in Firestore:', user.uid);
    } else {
      console.log('User already exists in Firestore:', user.uid);
    }

    return { user };
  } catch (error) {
    if (error instanceof Error) {
      const errorCode = error.name;
      const errorMessage = error.message;

      return { errorCode, errorMessage };
    }
    return { errorCode: "unknown_error", errorMessage: "An unknown error occurred" };
  }
}


async function signInWithApple() {
  const provider = new OAuthProvider('apple.com');
  
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date(),
      });
      console.log('New user document created in Firestore:', user.uid);
    } else {
      console.log('User already exists in Firestore:', user.uid);
    }

    return { user };
  } catch (error) {
    if (error instanceof Error) {
      const errorCode = error.name;
      const errorMessage = error.message;

      return { errorCode, errorMessage };
    }
    return { errorCode: "unknown_error", errorMessage: "An unknown error occurred" };
  }
}

export { signIn, signUp, signInWithGoogle };
