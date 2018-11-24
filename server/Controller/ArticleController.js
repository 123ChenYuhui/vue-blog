import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }

    async addArticle(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }

    async getOneArticle(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }

    async updateArticle(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }

    async deleteArticle(ctx){
        const id = ctx.params.id
        const res = await Article.deleteArticle(id)
        ctx.body = res
    }

    async publishArticle(ctx){
        const id = ctx.params.id
        const res = await Article.publishArticle(id)
        ctx.body = res
    }

    async getTags(ctx){
        ctx.body = await Article.getTags()
    }

    async getAbout(ctx){
        ctx.body = await Article.getAbout()
    }

    async updateTag(ctx) {
        const id = ctx.params.id
        const tags = ctx.request.body.tags
        ctx.body = await Article.updateTag(id,tags)
    }

    async updateBrief(ctx){
        const id = ctx.params.id
        const content = ctx.request.body.content
        const res = await Article.updateBrief(id,content)
        ctx.body = res
    }

    async getBookList(ctx) {
        ctx.body = await Article.getAllBooks()
    }

    async addBook(ctx) {
        const book = ctx.request.body
        ctx.body = await Article.addBook(book)
    }

    async editBook(ctx) {
        const id = ctx.params.id
        const book = ctx.request.body
        ctx.body = await Article.updateBook(id, book)
    }

    async deleteBook(ctx) {
        const id = ctx.params.id
        ctx.body = await Article.deleteBook(id)
    }
}
export default new ArticleController()