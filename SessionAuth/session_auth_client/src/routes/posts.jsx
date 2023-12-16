import { useState } from "react";
import useFetcher from "../utils/useFetcher";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const fetcher = useFetcher();
    const getPosts = async () => {
        const res = await fetcher({
            pathname: "Post/User",
        });
        if (res) {
            setPosts(res)
        }
    }
    const getAdminPosts = async () => {
        const res = await fetcher({
            pathname: "Post/Admin",
        });
        if (res) {
            setPosts(res)
        }
    }
    return <>
        <button onClick={getPosts}>Get UserPosts</button>
        <button onClick={getAdminPosts}>Get Admin Posts</button>
        <span>Posts:</span>
        <ul>
            {posts.map((p, idx) => <li key={p.id}>
                <strong>{p.title}</strong>
                <p>{p.body}</p>
            </li>)}
        </ul>
    </>
}
export default Posts;