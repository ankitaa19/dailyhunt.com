// App.js or ParentComponent.js
import React from "react";
import PostForm from "./components/PostForm"; // Adjust the path
import PostList from "./components/PostList"; // Adjust the path

const App = () => {
    return (
        <div>
            <h1>Create a Post</h1>
            <PostForm user={currentUser} />
            <h2>Posts</h2>
            <PostList />
        </div>
    );
};

export default App;
