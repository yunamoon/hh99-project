import useGetUserProfileById from "@/hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "@/utils/timeAgo";

const Comment = ({ comment }) => {
    const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

    if (isLoading) return <CommentSkeleton />;
    return (
        <div className="flex gap-4">
            <Link to={`/${userProfile.username}`}>
                <img src={userProfile.profilePicURL} alt="profile" className="w-8 h-8 rounded-full" />
            </Link>
            <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                    <Link to={`/${userProfile.username}`}>
                        <p className="font-bold text-sm">
                            {userProfile.username}
                        </p>
                    </Link>
                    <p className="text-base">{comment.comment}</p>
                </div>
                <p className="text-sm text-gray-500">
                    {timeAgo(comment.createdAt)}
                </p>
            </div>
        </div>
    );
};

export default Comment;

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
