import Articles from '../model/Articles'
class ArticlesController {
    async getArticleList(ctx) {
        const {isPublished = 0, offset = 0, limit = 0} = ctx.query
        if (isPublished) {
            const res = {
                maxPage: '',
                articles: ''
            }
            const promises = []
            promises.push(Articles.getPagination())
            promises.push(Articles.getLimitArticles(offset, limit))
            const results = await Promise.all(promises)
            res.maxPage = Math.ceil(results[0][0]['COUNT(*)'] / limit)
            res.articles = results[1]
            ctx.body = res
        }
        else {
            ctx.body = await Articles.getAllArticles()
        }
    }

    async getOneArticle(ctx) {
        const res = await Articles.getOneArticle(ctx.params.id)
        if (res.length === 0) {
            ctx.throw(404, '没有找到到该文章！')
        }
        ctx.body = res
    }

    async getIntroductions(ctx) {
        ctx.body =  await Articles.getIntroductions()
    }

    async getBookList(ctx) {
        ctx.body = await Articles.getAllBooks()
    }

    async getBrief(ctx) {
        ctx.body = await Articles.getBrief()
    }
}
export default new ArticlesController()