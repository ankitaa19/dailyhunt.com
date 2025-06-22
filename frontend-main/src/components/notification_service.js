import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBIPNi-pyl9d8uEolee-ZpsEix0rX304ew",
    authDomain: "daily-hunt-62ab5.firebaseapp.com",
    projectId: "daily-hunt-62ab5",
    storageBucket: "daily-hunt-62ab5.firebasestorage.app",
    messagingSenderId: "935852913400",
    appId: "1:935852913400:web:b46d09a7c363ea30e2810d",
    measurementId: "G-QC4FFG49B4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request notification permission
export const requestPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_PUBLIC_VAPID_KEY",
    });
    if (token) {
      console.log("Notification permission granted. Token:", token);
      // Save the token to your database for sending notifications later
    } else {
      console.error("No registration token available. Request permission to generate one.");
    }
  } catch (err) {
    console.error("An error occurred while retrieving token.", err);
  }
};

// Send notification (mock implementation)
export const sendNotification = async (title, body) => {
  // Replace this with your backend implementation to send notifications via FCM
  console.log("Notification sent with title:", title, "and body:", body);
};

// Listen for foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // Show the notification in the UI if needed
});