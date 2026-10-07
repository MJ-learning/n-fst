import { cacheLife, cacheTag } from "next/cache";

type Post = {
    "userId": number;
    "id": number;
    "title": string;
    "body": string;
}

export const getPosts = async () => {
    "use cache";
    cacheLife("days");
    cacheTag("posts");

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    return posts;
}