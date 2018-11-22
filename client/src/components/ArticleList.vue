<template>
    <div class="articlelist-container">
        <div class="article-list">
            <article>
                <header>
                    <h2>
                        <router-link class="title"></router-link>
                    </h2>
                    <h4 class="time"></h4>
                </header>
                <p class="abstract"></p>
                <footer>
                    <router-link class="read-more"></router-link>
                </footer>
            </article>
        </div>
        <div class="pagination">
            <span class="prev" >←
                <a>上一页</a>
            </span>
            <span class="next">
                <a>下一页</a>→</span>
        </div>
    </div>
</template>

<script>
  import Article from '@/components/Article'
  export default {
    name: 'ArticleList',
    comments:{
      Article
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

    .title {
        color: $title;
        padding-bottom: 0.3em;
    }

    .title:hover {
        border-bottom: 2px solid $base;
    }

    .read-more {
        color: $base;
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

