<template>
  <article>
    <header>
      <h1></h1>
      <h4 class="time"></h4>
      <h4>
        <span class="tag" v-for="tag in tags">{{ tag }}</span>
      </h4>
    </header>
    <p v-html=""></p>
  </article>
</template>

<script>
    export default {
        name: "Article"
    }
</script>

<style scoped>

</style>
