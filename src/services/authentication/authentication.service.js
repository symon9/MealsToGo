import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "mealstogo-001.firebaseapp.com",
  projectId: "mealstogo-001",
  storageBucket: "mealstogo-001.firebasestorage.app",
  messagingSenderId: "",
  appId: "",
};

export const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
