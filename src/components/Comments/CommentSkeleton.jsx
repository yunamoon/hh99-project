import React from "react";

const CommentSkeleton = () => {
    return (
        <div className="flex gap-4 w-full items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="flex gap-1 flex-col">
                <div className="h-2 w-24 bg-gray-200 animate-pulse"></div>
                <div className="h-2 w-12 bg-gray-200 animate-pulse"></div>
            </div>
        </div>
    );
};

export default CommentSkeleton;