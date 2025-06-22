import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Manynews from "./Manynews/Manynews.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import News from "./news/News.jsx";
import Signup from "./Signup.jsx"; // Import the new Signup component
import { auth } from "./firebase.config.js"; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { requestPermission, sendNotification } from './notification_service';


const MainApp = () => {
  useEffect(() => {
    document.title = "Daily-Hunt";
    const initNotifications = async () => {
      await requestPermission();
    };
    initNotifications();
  }, []);

  const createPost = async (post) => {
    // Code to save the post to Firebase Realtime Database
    // For example:
    // await firebase.database().ref('posts/' + post.id).set(post);

    // Send notification to all registered users
    const title = "New Post Alert";
    const body = `New post titled "${post.title}" has been uploaded.`;
    await sendNotification(title, body);
  };

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<News createPost={createPost} />} />
            <Route path="/news" element={<News createPost={createPost} />} />
            <Route path="/:news" element={<Manynews />} />
            <Route path="/signup" element={<Signup />} /> {/* Route for signup */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <MainApp />
    </>
  );
};

export default App;
