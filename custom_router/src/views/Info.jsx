import { useLoaderData, Link } from "react-router-dom";
import { useContext } from "react"
import { Context } from "../context/Context"

export default function Info() {
    const posts = useLoaderData();
    const { data } = useContext(Context);

    return (
        <>
            <h1>Info page</h1>
            <h2>{data}</h2>
            <h3>List:</h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title} : <Link to={`/info/detail/${post.id}`}>Detail</Link></li>
                })}
            </ul>
        </>
    )
}