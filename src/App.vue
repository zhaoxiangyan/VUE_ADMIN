<template>
  <div id="app">
      <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    @import "../static/css/main.css";
    #app{
      text-align: center;
    }
</style>
