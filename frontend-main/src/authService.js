// src/authService.js
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export { registerUser, loginUser };
