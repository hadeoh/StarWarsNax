import swapi from "swapi-node";
import { getCommentCount } from '../models/comments';

export const getMovies = async () => {
  try {
    let data = await swapi.get("https://swapi.dev/api/films");
    let commentCount = await getCommentCount();

    let res = data.results.sort(
      (a, b) => b.release_date.split("-")[0] - a.release_date.split("-")[0]
    );
    res.map(item => {
        commentCount.forEach(ele => {
            item.episode_id === ele.episodeid ? item['commentCount'] = ele.count : null;
        })
    })
    return res;
  } catch (error) {
    return error;
  }
};