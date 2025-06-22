// PostList.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ensure you have your firebase configuration

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsCollection = collection(db, "posts");
                const postsSnapshot = await getDocs(postsCollection);
                const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(postsList);
            } catch (error) {
                console.error("Error fetching posts: ", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.description}</h3>
                    {post.image && <img src={post.image} alt={post.description} />}
                    <p>{new Date(post.timestamp.seconds * 1000).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
