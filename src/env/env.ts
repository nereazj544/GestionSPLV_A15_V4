// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const env = {
    firebaseConfig: {
        apiKey: "AIzaSyCOa5ImW-Yp8qSb3PgxPi_C-pEYTCUmvlY",
        authDomain: "gestionsvpl.firebaseapp.com",
        projectId: "gestionsvpl",
        storageBucket: "gestionsvpl.firebasestorage.app",
        messagingSenderId: "954590294361",
        appId: "1:954590294361:web:1ac840c8f1d26e997adc48",
        measurementId: "G-GQTS01G4LJ"
    }
};

// Initialize Firebase
const app = initializeApp(env.firebaseConfig);
const analytics = getAnalytics(app);