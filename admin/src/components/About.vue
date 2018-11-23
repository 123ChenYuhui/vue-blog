<template>
  <div style="height:100%">
    <head-nav></head-nav>
    <Aside></Aside>
    <div class="about-container main">
      <h2>关于我 /
        <span>ABOUT ME</span>
      </h2>
      <hr>
      <main>
        <textarea></textarea>
        <section class="btn-container">
          <button class="not-del" @click="updateAbout">提交修改</button>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  import Aside from '@/components/common/Aside'
  import HeadNav from '@/components/common/HeadNav'
  import 'simplemde/dist/simplemde.min.css'
  import SimpleMDE from 'simplemde'
  import request from '@/utils/request'
    export default {
      name: "About",
      components: {
        Aside,
        HeadNav
      },
      data(){
        return {
          id: '',
          simplemde: ''
        }
      },
      mounted(){
        this.simplemde = new SimpleMDE({
          spellChecker:false,
          toolbarTips: false,
        })
        request({
          url:'/about',
          method:'get'
        }).then(res =>{
          console.log(res)
          //console.log(res[0].id)
          this.id = res[0].id
          this.simplemde.value(res[0].content)
        })
      },
      methods:{
        updateAbout(){
          request({
            url:`/about/update/${this.id}`,
            method:'post',
            data:{content: this.simplemde.value()}
          }).then(res=>{
            console.log(res)
          }).catch(err => alert(err))
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import '../assets/style/variable';
  main {
    height: calc(100% - 48px);
    padding: 0.5em 0;
    overflow: auto;
    font-size: 1.6rem;
  }

  .btn-container {
  @include flex($justify: flex-end);
  }
</style>
