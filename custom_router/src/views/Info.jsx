import { useLoaderData, Link } from "react-router-dom";
import { useContext } from "react"
import { Context } from "../context/Context"

export default function Info() {
    const posts = useLoaderData();
    const { data } = useContext(Context);

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-10">Info page</h1>
            <h2 className="text-xl text-center">{data}</h2>
            <h3 className="text-xl text-center">List:</h3>
            <ul className="p-6 space-y-3">
                {posts.map((post) => {
                    return (
                        <li key={post.id} className="card bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>

                                <div className="card-actions justify-end">
                                    <Link
                                        to={`/info/detail/${post.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Detail
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}