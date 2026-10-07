"use client";

import { useState } from "react";

export default function UpvoteBtn() {
    const [votes, setVotes] = useState(0);

    return (
        <button
            type="button"
            onClick={() => setVotes(currentVotes => currentVotes + 1)}
            className="h-9 shrink-0 rounded-md border border-zinc-300 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
            Upvote {votes}
        </button>
    );
}