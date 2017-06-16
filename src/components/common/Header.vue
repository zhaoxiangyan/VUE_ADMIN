<template>
        <div class="header">
            <div class="left">
                GQFX-CRM
            </div>
            <div class="center">
                <i class="el-icon-d-arrow-left"></i>
            </div>
            <div class="right">
                 <ul></ul>
            </div>
        </div>
</template>
<script>
    export default {
      name: 'header',  
      data () {
        return {
          name: 'linxin'
        }
      },
      computed: {
        username () {
          let username = localStorage.getItem('ms_username')
          // return username ? username : this.name
          if (!username) {
            username = this.name
          }
        }
      },
      methods: {
        handleCommand (command) {
          if (command === 'loginout') {
            localStorage.removeItem('ms_username')
            this.$router.push('/login')
          }
        }
      }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background:#242f42;
    }
</style>
