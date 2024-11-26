// src/components/Blog.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Blog() {
    const [posts, setPosts] = useState([]);
    let location = useLocation();
    let query = new URLSearchParams(location.search);
    let filter = query.get('filter') || 'all';

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchedPosts = [
            { id: 1, title: 'First Blog Post'},
            { id: 2, title: 'Second Blog Post'},
        ];
        setPosts(fetchedPosts);
    }, []);

    return (
        <div>
            <h2>Blog Page</h2>
            <p>Filter: {filter}</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog;