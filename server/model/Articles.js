import query from '../utils/query'
import escape from '../utils/eacape'
class Articles {
    async getLimitArticles(offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE WHERE isPublished=1 ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getPagination() {
        return await query(`SELECT COUNT(*) FROM ARTICLE WHERE isPublished=1`)
    }
}
export default new Articles()