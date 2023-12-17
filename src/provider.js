import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey:import.meta.env.VITE_PIKEY,
    authDomain:import.meta.env.VITE_UTHDOMAIN,
    projectId:import.meta.env.VITE_ROJECTID,
    storageBucket:import.meta.env.VITE_TORAGEBUCKET,
    messagingSenderId:import.meta.env.VITE_ESSAGINGSENDERID,
    appId:import.meta.env.VITE_PPID,
  };

  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  export default auth;