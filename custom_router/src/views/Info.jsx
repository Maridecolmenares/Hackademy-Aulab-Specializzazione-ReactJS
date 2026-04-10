import { useLoaderData, Link } from "react-router-dom";

export default function Info() {
    const posts = useLoaderData();

    return (
        <>
            <h1>Info page</h1>
            <h2>List:</h2>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title} : <Link to={`/info/detail/${post.id}`}>Detail</Link></li>
                })}
            </ul>
        </>
    )
}