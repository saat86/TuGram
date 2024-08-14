// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIyBxmj6wcb_zi4ZWxTquZXZ1pczTP7D0",
  authDomain: "tugram-e0d5f.firebaseapp.com",
  projectId: "tugram-e0d5f",
  storageBucket: "tugram-e0d5f.appspot.com",
  messagingSenderId: "638226507164",
  appId: "1:638226507164:web:9d9eee4c65333457de9459",
  measurementId: "G-3FE5QKDN65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth =getAuth(app);
 export const db =getFirestore(app);

export default app