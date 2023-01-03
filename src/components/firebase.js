// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// 1rst step::: initialize the app with firebase config.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGyZCD_KUDSclvcgLkPSWa7V8rT2HLqF8",
  authDomain: "clone-6a5f5.firebaseapp.com",
  projectId: "clone-6a5f5",
  storageBucket: "clone-6a5f5.appspot.com",
  messagingSenderId: "156291171464",
  appId: "1:156291171464:web:4f4323010a9a16f8528b3d",
  measurementId: "G-ZWEZYX42PE",
};

const app = initializeApp(firebaseConfig);
// 2nd step:: initialize (2 things)::
// 1rst >>> initialize the database:

const db = getFirestore(app); // realtime database of the firebase

//2nd >>> setup auth which gives us a variable that we can use to handle all the signing in.

const auth = getAuth(app);

export { db, auth }; // exporting the database and the authentication and use it.
