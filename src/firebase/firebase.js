// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCjylKpGGKNWRj8WLfrZQ2y5MnL29n2aJU",
    authDomain: "students-counseling-platform.firebaseapp.com",
     databaseURL:"https://students-counseling-platform-default-rtdb.firebaseio.com",
    projectId: "students-counseling-platform",
    storageBucket: "students-counseling-platform.appspot.com",
    messagingSenderId: "531159858201",
    appId: "1:531159858201:web:15a11fbca30ee25e61fe88",
    measurementId: "G-GTGW9291K3"
   
}     

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };



