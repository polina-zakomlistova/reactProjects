import React, { useState } from 'react';
import { useEffect } from 'react';
import Post from '../Post';
import './style.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((responce) => responce.json())
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <div className="posts__list">
            <h1>Posts</h1>
            <hr />
            {isLoading ? (
                <h1>isLoading...</h1>
            ) : (
                posts.map((post) => {
                    return <Post {...post} key={post.id} />;
                })
            )}
        </div>
    );
}

export default Posts;
