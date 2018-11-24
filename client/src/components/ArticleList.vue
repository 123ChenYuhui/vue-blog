<template>
  <div class="container">
    <div class="article-list">
      <article v-for="{id, title, publishTime, content} in articles" :key="id" class="list">
        <header>
          <h2>
            <router-link class="title" :to="'/articles/' + id">{{ title }}</router-link>
          </h2>
        </header>
        <!--<p class="abstract" v-html="parseMarkdown(content)"></p>-->
        <footer>
          <router-link class="read-more" :to="'/articles/' + id">文章详情....</router-link>
          <h4 class="time">{{ publishTime }}</h4>
        </footer>
      </article>
    </div>
    <div class="pagination">
            <span class="prev" :class="{'hide': parseInt(this.$route.query.page, 10) === 0}">←
                <a @click="prevPage">上一页</a>
            </span>
      <span class="next" :class="{'hide': parseInt(this.$route.query.page, 10) === this.maxPage - 1}">
                <a @click="nextPage">下一页</a>→</span>
    </div>
  </div>
</template>

<script>
  /**
   * @author
   * @file 文章列表组件
   */

  import parseMarkdown from '@/utils/parseMarkdown'
  import moment from 'moment'
  import request from '@/utils/request'
  moment.locale('zh-CN')
  export default {
    data() {
      return {
        offset: '',
        articles: '',
        maxPage: ''
      }
    },
    created() {
      this.offset = this.$route.query.page * 5
      //console.log(this.offset)
      request({
        url:`/article?isPublished=1&offset=${this.offset}&limit=5`,
        method:'get'
      }).then(res => {
        //console.log(res.articles)
          for (let article of res.articles) {
            article.publishTime = moment(article.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
            article.content = RegExp['$`']
          }
          this.articles = res.articles
           this.maxPage = res.maxPage
        })
        .catch(err => alert(err))
    },
    methods: {
      parseMarkdown,
      prevPage() {
        if (this.$route.query.page > 0) {
          this.$router.push({path: '/articles', query: {page: this.$route.query.page - 1}})
        }
      },
      nextPage() {
        if (this.$route.query.page < this.maxPage - 1) {
          this.$router.push({path: '/articles', query: {page: parseInt(this.$route.query.page, 10) + 1}})
        }
      }
    },
    beforeRouteUpdate(to, from, next) {
      if (to.path === '/articles') {
        this.offset = to.query.page * 5
        request({
          url:`/article?isPublished=1&offset=${this.offset}&limit=5`,
          method:'get'
        }).then(res => {
          //console.log(res)
          //const pattern = /[\u4e00-\u9fa5]/
            for (let article of res.articles) {
              article.publishTime = moment(article.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
              article.content = RegExp['$`']
            }
            this.articles = res.articles
          })
          .catch(err => alert(err))
      }
      next()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // 覆盖article全局样式
  @import '../assets/style/variable';
  h2 {
    border-bottom: none;
    padding: 0;
  }
  .list{
    background-color: rgba(0,0,0,.2);
    padding-left: 15px;
  }
  .container{
    position: relative;
    max-width: 850px;
    margin: 0 auto;
  }
  .title {
    color: $title;
    padding-bottom: 0.3em;
  }

  .title:hover {
    border-bottom: 2px solid $base;
  }

  .time{
    display: flex;
    flex-direction: row-reverse;
  }

  .read-more {
    color: #ffff00;
    font-size: 1.6em;
  }

  .pagination {
    @include flex($justify: space-between);
    font-size: 1.5rem;
    margin-top: 1.5em;
  }

  .prev,
  .next {
    a {
      cursor: pointer;
      color: $base;
    }
  }

  .hide {
    opacity: 0;
  }
</style>

