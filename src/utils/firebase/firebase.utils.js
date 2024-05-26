import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGdFJow66wBYBDjQ9npDUHpHkU3KJ2mG0",
    authDomain: "crwn-clothing-94e9d.firebaseapp.com",
    projectId: "crwn-clothing-94e9d",
    storageBucket: "crwn-clothing-94e9d.appspot.com",
    messagingSenderId: "294615205992",
    appId: "1:294615205992:web:15b535a83e21a968fbd3dd"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = async () => {
    return (
        signInWithPopup(auth, provider).then((result) => {    
            console.log(result);
            const {user} = result;
            const userDocRef = createUserDocumentFromAuth(user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(errorCode,errorMessage,email,credential);
        })
    );
};

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = await doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
        });
      } catch(error) {
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;

  };