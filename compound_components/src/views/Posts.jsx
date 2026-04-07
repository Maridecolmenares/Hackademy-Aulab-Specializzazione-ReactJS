import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Posts page</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                        <Link to={`/posts/${post.id}`}> Detail</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}