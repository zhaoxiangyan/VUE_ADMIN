<template>
	<div class="one">
	<div v-title>账户交易配置</div>
	    <div class="page_title">
		    <span><i class="el-icon-edit"></i>账户交易配置</span>
		    <el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item>账户交易配置</el-breadcrumb-item>
	    	</el-breadcrumb>
		</div>	
		<ul class="page_content">
		  <li>
		      <a class="preview" href="http://192.168.0.133/file/agreement.pdf" target="_blank"><i class="el-icon-document"></i>用户协议</a>
              <a class="preview" href="http://192.168.0.133/file/agreement.pdf" target="_blank"><i class="el-icon-document"></i>委托扣款三方协议</a>
		  </li>
		</ul>	  
	</div>	
</template>
<script>
 export default {
    data() {
      return {
     
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
	text-align:left;
	padding:0 10px;
}
.page_title span{
	display:inline-block;
	height:40px;
	line-height:40px;
}
.page_title span i.el-icon-edit{
	display:inline-block;
	color:#444;
	height:100%;
	width:35px;
	line-height:40px;
	font-size:18px;
	float:left;
	text-align:center;
}
.el-breadcrumb{
	display:inline-block;
	float:right;
}
ul,li{
	list-style:none;
}
.page_content{

}
.page_content li{
	margin:30px 0 45px;
	padding:0 30px;
	text-align:left;
}
.page_content li a.preview{
	box-sizing:border-box;
	display:inline-block;
	width:345px;
	height:35px;
	color:#fff;
	background:#21b548;
	border-radius:3px;
	border:1px solid #1a913a;
	line-height:35px;
	text-align:left;
	margin-right:30px;
}
.el-icon-document{
	display:inline-block;
	color:#fff;
	height:100%;
	width:35px;
	border-right:1px solid #1a913a;
	line-height:35px;
	font-size:25px;
	text-align:center;
	float:left;
	margin-right:20px;
}
</style>