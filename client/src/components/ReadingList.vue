<template>
    <div class="readinglist-container">
        <h1>阅读列表</h1>
        <table>
            <tr>
                <th>书名</th>
                <th>作者</th>
                <th>个人评分</th>
            </tr>
            <tr v-for="{name, author, score} in books">
                <td class="col-1">{{ name }}</td>
                <td class="col-2">{{ author }}</td>
                <td class="col-3">
                    <star :score="score"></star>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
/**
 * @author
 * @file 阅读列表组件
 */

import Star from '@/components/common/Star'
import request from '@/utils/request'
export default {
    components: {
        Star
    },
    data() {
        return {
            books: ''
        }
    },
    created() {
          request({
            url:`/book`,
            method:'get'
          }).then(res => {
                this.books = res
            })
            .catch(err => alert(err))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/style/variable';
  .readinglist-container{
    max-width: 850px;
    margin: 0 auto;
    position: relative;
  }
table {
    width: 100%;
  font-size: 1.6em;
    border-collapse: collapse;
    margin-bottom: 1em;
    th {
        padding: 0.5em 0;
        color: $title;
        border-bottom: 1px solid $word;
    }
    td {
        text-align: center;
        /*font-size: 1.3rem;*/
        padding: 1em 0;
        border-bottom: 1px dotted $word;
    }

    .col-1,
    .col-2 {
        width: 25%;
    }

    .col-2 {
        border-left: 1px dotted $word;
        border-right: 1px dotted $word;
    }

    .col-3 {
        color: $base;
    }
}
</style>
