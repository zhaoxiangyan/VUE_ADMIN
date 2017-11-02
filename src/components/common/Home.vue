<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content" v-bind:class="[ getcollapsed ? '' : 'min-left']">
            <transition name="move"><router-view></router-view></transition>
             <v-Copyright></v-Copyright>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue'
    import vSidebar from './Sidebar.vue'
     import vCopyright from '../page/Copyright.vue'
    import {mapGetters} from 'vuex'
    export default {
      components: {
        vHead, vSidebar,vCopyright
      },
      computed: {
        // 使用对象展开运算符将getters混入computed对象中
        ...mapGetters([
            'getcollapsed'
        ]) 
      }
    }
</script>

<style scoped>
.content.min-left{
    left:80px;
}
.content{
    background:#ecf0f5;
}
</style>
