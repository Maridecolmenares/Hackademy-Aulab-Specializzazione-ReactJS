export const getAllPostsLoader = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await promise.json();
    return json;
}

export const getSinglePostLoader = async ({ params }) => {
    // Post
    const post_promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post_json = await post_promise.json();

    // Comments
    const comments_promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const comments_json = await comments_promise.json();

    return [post_json, comments_json];

}