import { getComments, postComment } from '../models/comments';

export const getComment = async (episodeId) => {
    try {
        return getComments(episodeId);
    } catch (error) {
        return error;
    }
}

export const postComments = async (episodeId, body, ipAddress) => {
    try {
        if (body.length > 500) {
            return 'comment error';
        }
        return postComment(episodeId,body,ipAddress);
    } catch (error) {
        return error;
    }
}