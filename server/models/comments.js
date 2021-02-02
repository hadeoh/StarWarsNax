import db from './db';

export const getCommentCount = async () => {
    const query = 'SELECT COUNT(*) AS count, episodeid FROM comments GROUP BY episodeid';
    const result = await db.query(query);
    return result.rows;
}

export const getComments = async (episodeId) => {
    const query = 'SELECT * FROM comments WHERE  episodeid = $1 ORDER BY createdAt DESC';
    const result = await db.query(query, [episodeId]);
    return result.rows;
}

export const postComment = async (episodeId,body,ipAddress) => {
    const query = 'INSERT INTO comments (episodeid, body, ipaddress) VALUES($1,$2,$3) RETURNING *;';
    const result = await db.query(query, [episodeId,body,ipAddress]);
    console.log(result.rows[0])
    return result.rows[0];
}