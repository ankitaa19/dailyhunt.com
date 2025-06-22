import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

const usePosts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const postsRef = firebase.database().ref("posts");

    // Listen for changes in real-time
    postsRef.on("value", (snapshot) => {
      setPosts(snapshot.val() || {});
    });

    // Cleanup listener on unmount
    return () => postsRef.off();
  }, []);

  return posts;
};

export default usePosts;
