import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUEzGhTnhf1tVhGxoQOx-u9KECJTWgBBw",
  authDomain: "facebook-clone-7f8e8.firebaseapp.com",
  projectId: "facebook-clone-7f8e8",
  storageBucket: "facebook-clone-7f8e8.appspot.com",
  messagingSenderId: "203322474864",
  appId: "1:203322474864:web:4a7c98eb06c13ce399cfb5",
};

const app = initializeApp(firebaseConfig);
const imgDb = getStorage(app);
const txtDb = getFirestore(app);
export { imgDb, txtDb };
