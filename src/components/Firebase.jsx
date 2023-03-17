import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
	apiKey: "AIzaSyA810onI4yxZSLLrNJuBlJxuU2vTp1zL9g",
	authDomain: "itemshub-1d29e.firebaseapp.com",
	projectId: "itemshub-1d29e",
	storageBucket: "itemshub-1d29e.appspot.com",
	messagingSenderId: "826018643638",
	appId: "1:826018643638:web:93b0ce4343a09fa43eb017",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
// 	signInWithPopup(auth, provider)
// 		.then((res) => {
// 			// const name = ;
// 			const email = res.user.email;
// 			// const profilePic = res.user.photoURL;
// 			localStorage.setItem("name", res.user.displayName);
// 			localStorage.setItem("email", res.user.email);
// 			localStorage.setItem("profilePic", res.user.photoURL);
// 			console.log("usercredential", res);
// 		})
// 		.catch((error) => console.log(error));
// };
// export const emails = localStorage.getItem("email");
