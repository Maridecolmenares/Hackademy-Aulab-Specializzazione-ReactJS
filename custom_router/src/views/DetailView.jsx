import { useLoaderData } from "react-router-dom"

export default function DetailView() {

    const [post, comments] = useLoaderData();
    console.log(post);
    console.log(comments);



    return (
        <>
            <h1>Detail page</h1>
            {/* <h2>Id: {id}</h2> */}
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <p>Comments:</p>
            <ul>
                {comments.map((comment) => {
                    return <li key={comment.id}>{comment.body} - {comment.email}</li>
                })}
            </ul>
        </>
    )
}