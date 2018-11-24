import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'
import Archive from '@/components/Archive'
import Article from '@/components/Article'
import Tag from '@/components/Tag'
import Read from '@/components/ReadingList'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles',
      component: ArticleList
    },
    {
      path: '/articles/:id',
      component: Article
    },
    {
      path: '/archive',
      component: Archive
    },
    {
      path: '/tags',
      component: Tag
    },
    {
      path: '/read',
      component: Read
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '*',
      redirect: {
        path: 'articles',
        query: {
          page: 0
        }
      }
    }
  ]
})
