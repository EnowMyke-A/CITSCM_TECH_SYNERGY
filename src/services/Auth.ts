import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../config/firebase';

interface User {
    email: string;
    password: string;
}

// Function to sign up a user with email and password
async function signUp({ email, password }: User) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
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

// Function to sign in a user with email and password
async function signIn({ email, password }: User) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
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

// Function to sign in a user with Google
async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return { user, token };
  } catch (error) {
    if (error instanceof Error) {
      const errorCode = error.name;
      const errorMessage = error.message;

      return { errorCode, errorMessage};
    }
    return { errorCode: "unknown_error", errorMessage: "An unknown error occurred" };
  }
}

export { signIn, signUp, signInWithGoogle };
