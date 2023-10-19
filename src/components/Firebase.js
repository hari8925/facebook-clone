
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUEzGhTnhf1tVhGxoQOx-u9KECJTWgBBw",
  authDomain: "facebook-clone-7f8e8.firebaseapp.com",
  projectId: "facebook-clone-7f8e8",
  storageBucket: "facebook-clone-7f8e8.appspot.com",
  messagingSenderId: "203322474864",
  appId: "1:203322474864:web:4a7c98eb06c13ce399cfb5"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app