<template>
  <div id="app">
    <!--<fire-canvas class="fire"></fire-canvas>-->
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="150"
      shapeType="star"
      :particleSize="5"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="120"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
      class="cyh"
    >
    </vue-particles>
    <header-nav></header-nav>
    <div id="main" @click="sweepMask" style="z-index: 999;">
      <transition mode="out-in" name="fade" @before-enter="beforeEnter" @after-enter="afterEnter">
        <router-view/>
      </transition>
    </div>
    <footer id="app-footer">
    </footer>
  </div>
</template>

<script>
  /**
   * @author
   * @file client根组件
   */
  import HeaderNav from '@/components/common/HeaderNav'
  export default {
    name: 'App',
    components: {
      HeaderNav,
    },
    data() {
      return {
        maskFlag: false
      }
    },
    methods: {
      sweepMask() {
        this.maskFlag = !this.maskFlag
      },
      afterEnter() {
        const footer = document.getElementById('app-footer')
        footer.className = 'solid'
      },
      beforeEnter() {
        const footer = document.getElementById('app-footer')
        footer.className = 'trans'
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../src/assets/style/variable';
  footer {
    font-weight: 200;
    width: 95%;
    max-width: 850px;
    text-align: center;
    font-size: 1.4rem;
    margin: 0 auto;
    padding: 2em 0;
    color: $special;
    box-shadow: 0 -1px 0 rgba(255, 255, 255, .8);
    .github {
      color: $base;
    }
  }

  .trans {
    opacity: 0;
  }

  .solid {
    opacity: 1;
  }
  .cyh{
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: url("./assets/image/background.jpg");
  }
</style>
