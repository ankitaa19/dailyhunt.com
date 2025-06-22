import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebaseConfig'; // Adjust the import according to your file structure

const PostForm = ({ user }) => {
    const [postDescription, setPostDescription] = useState("");
    const [postImage, setPostImage] = useState(null);
    const [postOpen, setPostOpen] = useState(false);

    const handlePostSubmit = async () => {
        try {
            const postRef = await addDoc(collection(db, "posts"), {
                description: postDescription,
                image: postImage, // This should be a URL after uploading to storage
                userId: user.uid,
                timestamp: new Date(),
            });

            // Optionally upload the image to Firebase Storage and get the download URL
            // After uploading the image, you can update the post with the image URL

            setPostOpen(false);
            setPostDescription("");
            setPostImage(null);
        } catch (error) {
            console.error("Error adding post: ", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        handlePostSubmit(); // Call your function here
    };

    return (
        <div>
            {postOpen && (
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={postDescription}
                        onChange={(e) => setPostDescription(e.target.value)}
                        placeholder="What's on your mind?"
                    />
                    {/* Add file input for image upload if needed */}
                    <button type="submit">Submit Post</button>
                </form>
            )}
        </div>
    );
};

export default PostForm;
