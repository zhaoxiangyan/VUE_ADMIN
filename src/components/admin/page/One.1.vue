<template>
	<div class="one">
		<el-breadcrumb separator="/">
		    <!--<i class="el-icon-document"></i>-->
			<el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>附件</el-breadcrumb-item>
			<el-breadcrumb-item>协议</el-breadcrumb-item>
		</el-breadcrumb>
       <p class="xieyi">
	    <!-- <a href="../../../static/pdf/2地缘政治.zip" target="_blank">扣款协议预览下载</a>-->
		  扣款协议<a href="http://192.168.0.133/file/agreement.pdf" target="_blank">预览</a><a href="http://192.168.0.133/file/agreement.zip">下载</a>
	  	<!--<a href="../../../static/web/viewer.html" target="_blank"><i class="el-icon-document"></i>扣款协议预览下载</a>-->
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview1"
  :on-remove="handleRemove1"
  :file-list="fileList1">
  <el-button size="small" type="primary">点击上传</el-button>
  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
</el-upload>			
	   </p>
	   <hr/>
	   <p class="xieyi">
	    <!--<a href="../../../static/web/viewer1.html" target="_blank"><i class="el-icon-document"></i>合作协议预览下载</a>-->
		  <!--<a href="../../../static/pdf/4避险货币.zip" target="_blank">合作协议预览下载</a>-->
			合作协议<a href="http://192.168.0.133/file/Agreement.pdf" target="_blank">预览</a><a href="http://192.168.0.133/file/Agreement.zip">下载</a>
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview2"
  :on-remove="handleRemove2"
  :file-list="fileList2">
  <el-button size="small" type="primary">点击上传</el-button>
  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
</el-upload>
	   </p>
	   <hr/>
	</div>	
</template>
<script>
 export default {
    data() {
      return {
        fileList1: [{
					name: 'xiyi1.png', 
					url: '../../../static/pdf/xieyi1.PNG'
				}],
				fileList2: [{
					name: 'xieyi2.png', 
					url: '../../../static/pdf/xieyi2.PNG'
				}]
      };
    },
    methods: {
	//   submitUpload() {
    //     this.$refs.upload.submit();
    //   },
      handleRemove1(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview1(file) {
        console.log(file);
      },
			handleRemove2(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview2(file) {
        console.log(file);
      }
    }
  }
</script>
<style scoped>
.xieyi{
	margin:30px 0;
	text-align:left;
}
.xieyi a{
	color:#3175d1;
}
.xieyi a:hover{
	color:#90c7f3;
}
.xieyi a:active{
	color:#3175d1;
}
.upload-demo{
	/*margin:40px 0;*/
	/*width:360px;*/
	text-align:left;
	float:right;
}
.upload-demo ul.el-upload-list{
	display:inline-block;
	width:300px;
}
</style>