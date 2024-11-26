// src/components/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchedPost = {
            id: id,
            title: `Blog Post ${id}`,
            content: `This is the content of blog post ${id}.`,
        };
        setPost(fetchedPost);
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default BlogPost;