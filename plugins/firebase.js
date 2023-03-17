import { initializeApp, } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import 'firebaseui/dist/firebaseui.css';
// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Qp9fXxiQG4mLmNqCwbFA7ryN55cMMU8",
  authDomain: "trip-tac-tone.firebaseapp.com",
  databaseURL: "https://trip-tac-tone-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trip-tac-tone",
  storageBucket: "trip-tac-tone.appspot.com",
  messagingSenderId: "131124707681",
  appId: "1:131124707681:web:67319854fc7105b3f88520"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const logout = () => signOut(auth).then((_) => window.location.href = '/')
const storage = {
  ref: (path) => ref(getStorage(app), path),
  upload: (ref, file) => uploadBytes(ref, file),
  getDownloadURL:  getDownloadURL
}

export { auth, logout, storage }
