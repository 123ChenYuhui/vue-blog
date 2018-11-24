import query from '../utils/query'
import escape from '../utils/eacape'
class Articles {
    async getLimitArticles(offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE WHERE isPublished=1 ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getPagination() {
        return await query(`SELECT COUNT(*) FROM ARTICLE WHERE isPublished=1`)
    }

    async getOneArticle(id) {
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }

    async getIntroductions() {
        return await query(`SELECT id,title,tags,publishTime FROM ARTICLE where isPublished=1 ORDER BY publishTime DESC`)
    }

    async getAllBooks() {
        return await query(`SELECT * FROM RD_LIST`)
    }

    async getBrief() {
        return await query(`SELECT * FROM ABOUT`)
    }
}
export default new Articles()