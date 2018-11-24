<template>
    <div class="container">
      <article>
        <header>
          <h1>{{ title }}</h1>
          <h4>
            <span class="tag" v-for="tag in tags">{{ tag }}</span>
          </h4>
        </header>
        <p v-html="parseMarkdown(content)"></p>
        <h4 class="time">{{ publishTime }}</h4>
      </article>
    </div>
</template>

<script>
/**
 * @author
 * @file 特定文章组件
 */

import parseMarkdown from '@/utils/parseMarkdown'
import moment from 'moment'
import request from '@/utils/request'
moment.locale('zh-CN')
export default {
    data() {
        return {
            title: '',
            publishTime: '',
            tags: '',
            content: ''
        }
    },
    created() {
        const id = this.$route.params.id
          request({
            url:`/article/${id}`,
            method:'get'
          }).then(res => {
            //console.log(res)
                const data = res[0]
                this.title = data.title
                this.publishTime = moment(data.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
                this.content = data.content
                this.tags = data.tags ? data.tags.split(',') : []
            })
            .catch(err => alert(err))
    },
    methods: {
        parseMarkdown
    }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/variable';
  .container{
    max-width: 850px;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0,0,0,.2);
    padding-left: 15px;
  }
  .time{
    display: flex;
    flex-direction: row-reverse;
  }
.tag {
    color: $quote;
    margin-right: 1em;
}
</style>
