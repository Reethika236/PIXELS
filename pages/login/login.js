// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi-Os-cpPM0xATUvjV2XCwQkp3EWCVbDI",
  authDomain: "movieweb-auth.firebaseapp.com",
  projectId: "movieweb-auth",
  storageBucket: "movieweb-auth.appspot.com",
  messagingSenderId: "617390712701",
  appId: "1:617390712701:web:f2762caa27874abd618e14",
  measurementId: "G-0JBK72ELF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth();

// Submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Successfully signed in!");
      // Additional logic if needed
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage); // Fixed this line
    });
});
