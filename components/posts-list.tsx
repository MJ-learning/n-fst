import { getPosts } from "@/lib/utils";
import Link from "next/link";
import UpvoteBtn from "./upvote-btn";

type Post = {
    "userId": number;
    "id": number;
    "title": string;
    "body": string;
}

export default async function PostsList() {
    const posts =await getPosts();

    return (
        <ul className="space-y-3">
            {posts.slice(0, 5).map((post: Post) => {
                return (
                    <li key={post.id}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={`/posts/${post.id}`}
                                className="text-lg font-semibold text-zinc-950 hover:text-zinc-800"
                            >
                                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                            </Link>
                           <UpvoteBtn />
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}