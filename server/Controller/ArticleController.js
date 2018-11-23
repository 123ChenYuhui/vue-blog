import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
        //const a = await Article.getAllArticles()
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
        //const a = await Article.getTags()
        //console.log(a)
        ctx.body = await Article.getTags()
    }
    async getAbout(ctx){
        //const b = await Article.getAbout()
        //console.log(b)
        ctx.body = await Article.getAbout()
    }
    async updateTag(ctx) {
        const id = ctx.params.id
        console.log(id)
        const tags = ctx.request.body.tags
        console.log(tags)
        ctx.body = await Article.updateTag(id,tags)
    }
    async updateBrief(ctx){
        const id = ctx.params.id
        const content = ctx.request.body.content
        const res = await Article.updateBrief(id,content)
        //console.log(res)
        ctx.body = res
    }


}
export default new ArticleController()