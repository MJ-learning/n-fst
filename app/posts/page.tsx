import PostsList from "@/components/posts-list";
import RecentlyViewedPosts from "@/components/recently-viewed-posts";
import { Suspense } from "react";

export default async function PostsPage() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                    Posts
                </h1>

                <Suspense fallback={<p>Loading Posts List...</p>}>
                    <PostsList />
                </Suspense>

                <Suspense fallback={<p>Loading Recently Viewed Posts...</p>}>
                    <RecentlyViewedPosts />
                </Suspense>
            </section>
        </div>
    )
}