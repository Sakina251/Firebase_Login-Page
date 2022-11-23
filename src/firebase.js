import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAhMWxvh_MlklCmDtd4tr9BjBJ_ZaONPQg",
//   authDomain: "login-page-e74b2.firebaseapp.com",
//   projectId: "login-page-e74b2",
//   storageBucket: "login-page-e74b2.appspot.com",
//   messagingSenderId: "444268953492",
//   appId: "1:444268953492:web:0842c8301a560ab79d9981"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCmbu1wDfl8Qm6lKb-ciJ5xYC0DUlZYPsY",
  authDomain: "okkk-4579e.firebaseapp.com",
  databaseURL: "https://okkk-4579e-default-rtdb.firebaseio.com",
  projectId: "okkk-4579e",
  storageBucket: "okkk-4579e.appspot.com",
  messagingSenderId: "803104447615",
  appId: "1:803104447615:web:e121cb6a8066c37b82f34a",
  measurementId: "G-YZG1EF84WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
