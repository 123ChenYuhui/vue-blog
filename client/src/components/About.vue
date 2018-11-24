<template>
  <div class="about-container">
    <h1>关于我</h1>
    <p v-html="parseMarkdown(about)"></p>
  </div>
</template>

<script>
/**
 * @author
 * @file About me组件
 */

import parseMarkdown from '@/utils/parseMarkdown'
import request from '@/utils/request'

export default {
    data() {
        return {
            about: ''
        }
    },
    created() {
          request({
            url:`/briefs`,
            method:'get'
          })
            .then(res => this.about = res[0].content)
            .catch(err => alert(err))
    },
    methods: {
        parseMarkdown
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/style/variable';
  .about-container{
    max-width: 850px;
    margin: 0 auto;
    position: relative;
  }
h1 {
    padding-bottom: 1em;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
}
p{
  font-size: 1.6em;
}

ul {
    padding-left: 1.2em;
    li {
        margin: 1em auto;
    }
}
</style>
