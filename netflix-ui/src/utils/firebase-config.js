
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjD63SgKrVQcdzkLb2S1eL50QnOW0Wn3A",
  authDomain: "react-netflix-clone-52481.firebaseapp.com",
  projectId: "react-netflix-clone-52481",
  storageBucket: "react-netflix-clone-52481.appspot.com",
  messagingSenderId: "698708085771",
  appId: "1:698708085771:web:92c84ff794e53dd4df8b0e",
  measurementId: "G-D0G8LDH09T"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)