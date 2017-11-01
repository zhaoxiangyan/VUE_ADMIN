<template>
	<div class="one">
	<div v-title>客户中心</div>
	    <div class="page_title">
		    <span>签约协议<i>Sign Contract</i></span>
		    <el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item>附件</el-breadcrumb-item>
				<el-breadcrumb-item>协议</el-breadcrumb-item>
	    	</el-breadcrumb>
		</div>		  
	</div>	
</template>
<script>
 export default {
    data() {
      return {
        imgURL_one:'',
		imgURL_two:''
      };
    },
    methods: {

			
    }
}
</script>
<style scoped>
.one{
	/*position:relative;*/
	height:100%;
	background:#fff;
	border-bottom:1px solid #d2d6de;
    border-left:1px solid #e7ebf0;
	border-right:1px solid #e7ebf0;
	border-radius:4px;
}
.page_title{
	height:40px;
	border-bottom:1px solid #f4f4f4;
}
.el-breadcrumb{
	display:inline-block;
}

</style>