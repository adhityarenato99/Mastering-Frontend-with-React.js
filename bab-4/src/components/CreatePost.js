// src/components/CreatePost.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // Simulate creating a new post
        navigate('/blog');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreatePost;