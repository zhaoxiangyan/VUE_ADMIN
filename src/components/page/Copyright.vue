<template>
	<div class="copyright">
     <p>Copyright&copy;2015-2017 <b>CRM System</b>.<i>All rights reserved.</i><span>Version&nbsp;1.0.1</span></p>
	</div>	
</template>
<script>
 export default {
    name: 'Copyright',
    data() {
      return {

      };
    }
  }
</script>
<style scoped>
.copyright{
	height:50px;
  /*margin:0 -25px -25px;*/
  position:absolute;
  bottom:0px;
  left:0px;
  right:0px;
  border-top:1px solid #d2d6de;
  background:#fff;
}
.copyright p{
  line-height:50px;
  font-weight:bold;
  text-align:left;
  padding:0 20px;
}
.copyright p b{
  color:#21b548;
  font-style:normal;
}
.copyright p i{
  font-style:normal;
  font-weight:normal;
}
.copyright p span{
  float:right;
}
</style>