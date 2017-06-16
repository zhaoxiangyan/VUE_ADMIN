<template>
 <div class="hello">
     <h2>Welcome to Your GQFX-CRM</h2>
     <div class="btn">
       <router-link to="/login">Go to CRM</router-link>
     </div>
  </div>   
</template>
<script>
export default {
  name: 'hello'
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width:100%;
  margin-top:25%;
}
.hello h2{
  color:#42b983;
  margin-bottom:50px;
}
a {
  display:inline-block;
  color: #fff;
  width:250px;
  height:36px;
  line-height:36px;
  background:#20a0ff;
  border-radius:4px;
}
a:hover{
  background:#4db3ff;
}
</style>
