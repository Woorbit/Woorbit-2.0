import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyBU08ktapW07TE2bXLVYA3Yl7b-0HHiDD4",

  authDomain: "woorbit.firebaseapp.com",

  projectId: "woorbit",

  storageBucket: "woorbit.appspot.com",

  messagingSenderId: "913535745495",

  appId: "1:913535745495:web:d2a0787082259a24081f92",

  measurementId: "G-2ED7DELTD7"

};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);