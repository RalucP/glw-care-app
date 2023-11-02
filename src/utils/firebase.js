import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDm-P20GFMHUSOfWtmy7qsqJhfYI7zRh-E",
  authDomain: "glw-care-db.firebaseapp.com",
  projectId: "glw-care-db",
  storageBucket: "glw-care-db.appspot.com",
  messagingSenderId: "857482638933",
  appId: "1:857482638933:web:0fa5536f67f1186d3a06dc"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      });
    }
    catch(error){
      console.log(`error creating the user: ${error.message}`);
    }
  }

  return userDocRef;
}