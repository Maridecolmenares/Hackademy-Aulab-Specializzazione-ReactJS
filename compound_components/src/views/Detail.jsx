import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Detail() {

    const { id } = useParams();
    const [post, setPost] = useState();

    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        setPost(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Detail page</h1>
            <h2>ID: {id}</h2>

            {post && (
                <>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </>
            )}
        </>
    )
}