// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDPmtKX3UEc0UGHb_MqDJVy7RgZjjK9ZIg",
    authDomain: "resume-uploader-e9fa9.firebaseapp.com",
    projectId: "resume-uploader-e9fa9",
    storageBucket: "resume-uploader-e9fa9.appspot.com",
    messagingSenderId: "629087235503",
    appId: "1:629087235503:web:aabd90bc1d604795a7135a"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);