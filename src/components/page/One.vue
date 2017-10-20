<template>
	<div class="one">
		<el-breadcrumb separator="/">
		    <!--<i class="el-icon-document"></i>-->
			<el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>附件</el-breadcrumb-item>
			<el-breadcrumb-item>协议</el-breadcrumb-item>
		</el-breadcrumb>
       <p class="xieyi">
	   <!-- <a href="../../../static/pdf/2地缘政治.pdf">扣款协议</a>
		<a href="../../../static/pdf/4避险货币.pdf">合作协议</a>-->
		<a href="../../../static/web/viewer.html" target="_blank"><i class="el-icon-document"></i>扣款协议预览下载</a>
	   </p>
	   <hr/>
	   <p class="xieyi">
		<a href="../../../static/web/viewer1.html" target="_blank"><i class="el-icon-document"></i>合作协议预览下载</a>
	   </p>
	   <hr/>
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
	</div>	
</template>
<script>
 export default {
    data() {
      return {
        fileList2: [{
			name: 'xiyi1.png', 
			url: '../../../static/pdf/xieyi1.PNG'
			}, 
			{name: 'xieyi2.png', 
			url: '../../../static/pdf/xieyi2.PNG'
			}
		]
      };
    },
    methods: {
	//   submitUpload() {
    //     this.$refs.upload.submit();
    //   },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
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
	margin:40px 0;
	width:360px;
	text-align:left;
}
</style>