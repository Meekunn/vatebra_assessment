import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAyj5WeIxqMlNYlr2wfLyb02l_jKFhMal8",
	authDomain: "vatebra-assesment.firebaseapp.com",
	projectId: "vatebra-assesment",
	storageBucket: "vatebra-assesment.appspot.com",
	messagingSenderId: "618280648981",
	appId: "1:618280648981:web:8cdf3f94216cea55a6291c",
	measurementId: "G-N060P8K5GT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
