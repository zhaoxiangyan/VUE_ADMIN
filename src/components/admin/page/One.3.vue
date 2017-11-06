<template>
	<div class="one">
	<div v-title>签约协议</div>
	    <div class="page_title">
		    <span>签约协议<i>Sign Contract</i></span>
		    <el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item>签约协议</el-breadcrumb-item>
	    	</el-breadcrumb>
		</div>	
		<div class="page_content">
		  <el-row>
		     <el-col :xs="24" :sm="12" :md="8" :lg="8">
		      <a class="preview" href="http://192.168.0.133/file/agreement.pdf" target="_blank"><i class="el-icon-document"></i>用户协议</a>
			 </el-col>
			 <el-col :xs="24" :sm="12" :md="16" :lg="16">
			  <a class="download" href="http://192.168.0.133/file/agreement.zip">下载协议</a>
			  <div class="file_box">
			  <input type="file" id="user_file1" accept="image/png, image/jpeg, image/gif, image/jpg">
			  <span class="mask user_mask1">上传协议1</span>
			  </div>
			  <div class="file_box">
			  <input type="file" id="user_file2" accept="image/png, image/jpeg, image/gif, image/jpg">
			  <span class="mask user_mask2">上传协议2</span>
			  </div>
			  <div class="file_box">	
			  <input type="file" id="user_file3" accept="image/png, image/jpeg, image/gif, image/jpg">
			  <span class="mask user_mask3">上传协议3</span>
			  </div>
			  <input type="button" value="提交">
			 </el-col>
			 <el-col  :xs="24" :sm="24" :md="24" :lg="24">
			  <p>*您如果同意签约，请先下载协议，打印后签名，再扫描上传已签约的协议，再提交审核</p>
			 </el-col>
		  </el-row>
		  <el-row>
		      <a class="preview" href="http://192.168.0.133/file/agreement.pdf" target="_blank"><i class="el-icon-document"></i>委托扣款三方协议</a>
			  <a class="download" href="http://192.168.0.133/file/agreement.zip">下载协议</a>
			  <div class="file_box">
			  <input type="file" id="debit_file1" accept="image/png, image/jpeg, image/gif, image/jpg">
			  <span class="mask user_mask1">上传协议1</span>
			  </div>
			  <div class="file_box">
			  <input type="file" id="debit_file2" accept="image/png, image/jpeg, image/gif, image/jpg">
			  <span class="mask user_mask2">上传协议2</span>
			  </div>
			  <input type="button" value="提交">
			  <p>*您如果同意签约，请先下载协议，打印后签名，再扫描上传已签约的协议，再提交审核</p>
		  </el-row>
		</div>	  
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
	min-height:100%;
	height:auto;
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
.page_title span i{
	font-style:normal;
	font-size:14px;
	margin-left:5px;
	color:#77779e;
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
.page_content .el-row{
	margin:30px 0 45px;
	padding:0 30px;
	text-align:left;
}
.page_content .el-row a.preview{
	box-sizing:border-box;
	display:inline-block;
	/*width:345px;*/
	width:100%;
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
.page_content .el-row a.download,.page_content .el-row div.file_box,.page_content .el-row input,.page_content .el-row div span{
	display:inline-block;
	/*margin:0px 5px;*/
	padding:0px;
	/*width:90px;*/
	max-width:90px;
	width:16.6%;
	height:35px;
	line-height:35px;
	border-radius:2px;
	border:1px solid #b4b1b2;
	text-align:center;
}
.page_content .el-row div.file_box{
	position:relative;
	border:none;
	cursor:pointer;
}
.page_content .el-row a.download{
	box-sizing:border-box;
	color:#000;
}
.page_content .el-row a.download:hover{

}
.page_content .el-row input{
}
.page_content .el-row input[type='file']{
	opacity:0;
	position:absolute;
	filter:alpha(opacity=0);
    -moz-opacity:0;
	top:0px;
    left:0px;
	width:100%;
	height:35px;
	cursor:pointer;
}
.page_content .el-row div span{
	cursor:pointer;
   box-sizing:border-box;
   	width:100%;
	height:35px;
}
.page_content .el-row span.mask_user1{
}
.page_content .el-row span.mask_user2{}
.page_content .el-row span.mask_user3{}
.page_content .el-row input[type='button']{
	background:#fff;
	cursor:pointer;
}
.page_content .el-row p{
	margin-top:15px;
	color:#797878;
	font-size:15px;
}
</style>