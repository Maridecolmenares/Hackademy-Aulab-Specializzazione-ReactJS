import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Info() {
    const [posts, setPosts] = useState([]);

    const getData = async () => {
        const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await promise.json();
        setPosts(json);
    }

    useEffect(
        () => {
            getData()
        }, []
    );

    return (
        <>
            <h1>Info page</h1>
            <h2>List:</h2>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post.id}>
                        {post.title} : <Link to={`/info/${post.id}`}>Detail</ Link>
                    </li>
                ))}
            </ul>
        </>
    )
}