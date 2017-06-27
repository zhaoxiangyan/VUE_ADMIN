<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content" v-bind:class="[ getcollapsed ? '' : 'min-left']">
            <transition name="move"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue'
    import vSidebar from './Sidebar.vue'
    import {mapGetters} from 'vuex'
    export default {
      components: {
        vHead, vSidebar
      },
      computed: {
        // 使用对象展开运算符将getters混入computed对象中
        ...mapGetters([
            'getcollapsed'
        ]) 
      }
    }
</script>

<style>
.content.min-left{
    left:90px;
}
</style>
