import { toggleLike } from "../../services/likeservice.js";
import{ emitToPost,notifyUser} from "../../socket/socketManager.js";
import postRepository from "../../repository/PostRepository.js";

export const toggle = async (req, res) => {
    const { postId } = req.params;
    const userId = req.userId;

    try {
        const result = await toggleLike(postId, userId);
        emitToPost(postId,'likeUpdate',{postId,likesCount:result.likesCount});
        const post = await postRepository.getById(postId);
        if (post && post.author._id.toString()===userId){
            notifyUser(post.author._id.toString(),'newLikeNotification',{
                postId,
                fromUserId:userId,
            });
        }

        return res.status(200).json(result);
    } catch (err) {
        const status = err.status || 500;
        return res.status(status).json({ message: err.message });
    }
};