import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCvfgIdb_0MG6QyHXpFOvcTaEWwA_uPSfM",
    authDomain: "docs-clone-9e4b7.firebaseapp.com",
    projectId: "docs-clone-9e4b7",
    storageBucket: "docs-clone-9e4b7.appspot.com",
    messagingSenderId: "958240497212",
    appId: "1:958240497212:web:71ca4c0764260b05b42d39"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }; 