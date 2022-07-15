import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDatabase, ref } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDzIfuoKws0UtAItqVcJgnSS2f3ddSye3U",
    authDomain: "chat-onreact.firebaseapp.com",
    databaseURL: "https://chat-onreact-default-rtdb.firebaseio.com",
    projectId: "chat-onreact",
    storageBucket: "chat-onreact.appspot.com",
    messagingSenderId: "312197950544",
    appId: "1:312197950544:web:3f1f3e7c4424d54ae3b555"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, "user");
export const chatsRef = ref(db, "chats");
export const messagesRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getChatMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messagesList`);

