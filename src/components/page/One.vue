<template>
	<div class="one">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>附件</el-breadcrumb-item>
			<el-breadcrumb-item>协议</el-breadcrumb-item>
		</el-breadcrumb>
      <div class="xieyi">
					扣款协议<br/><a href="http://192.168.0.133/file/agreement.pdf" target="_blank">预览</a><br/><a href="http://192.168.0.133/file/agreement.zip">下载</a>
				 <!--	<form action="http://192.168.0.133/turingcloud/upload" >
					    <input type="file"  id="picture_one"  name="file">
							<input type="hidden" name="fileType" value="0">
							<input type="submit">
					</form>-->
			</div>
			<hr/>
			<div class="xieyi">
<form action='http://192.168.0.133/turingcloud/user/file/upload' method='post' name='myform' enctype="multipart/form-data">
 <input type="hidden" name="fileType" value="0" />
 <a class="select_button" href="javascript:void(0)">选择上传图片</a>
 <input type='file' id='iptfileupload' name="file" class="upload"  @change='show' value='' accept='image/*' /><br/>
 <img src='../../assets/img/login_01.png' alt='' id='img' /><br/>
 <input type="submit"  value="上传扣款协议">
</form>
	    </div>
	    <hr/>
	    <div class="xieyi">
					合作协议<br/><a href="http://192.168.0.133/file/Agreement.pdf" target="_blank">预览</a><br/><a href="http://192.168.0.133/file/Agreement.zip">下载</a>
				<!--	<input type="file" id="picture_two" @change="upload_two"> -->
	    </div>
			<hr/>
			<div class="xieyi">
<form action='http://192.168.0.133/turingcloud/user/file/upload' method='post' name='myform1' enctype="multipart/form-data">
 <input type="hidden" name="fileType" value="1" />
 <a class="select_button" href="javascript:void(0)">选择上传图片</a>
 <input type='file' id='iptfileuploa' class="upload" name="file" @change='show1' value='' accept='image/*' /><br/>
 <img src='../../assets/img/login_01.png' alt='' id='img1' /><br/>
 <input type="submit"  value="上传合作协议">
</form>			  
			</div>
	   <hr/>
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
			  getPath:function(obj,fileQuery,transImg) {
 
  var imgSrc = '', imgArr = [], strSrc = '' ;
 
  if(window.navigator.userAgent.indexOf("MSIE")>=1){ // IE浏览器判断
  if(obj.select){
   obj.select();
   var path=document.selection.createRange().text;
   alert(path) ;
   obj.removeAttribute("src");
   imgSrc = fileQuery.value ;
   imgArr = imgSrc.split('.') ;
   strSrc = imgArr[imgArr.length - 1].toLowerCase() ;
   if(strSrc.localeCompare('jpg') === 0 || strSrc.localeCompare('jpeg') === 0 || strSrc.localeCompare('gif') === 0 || strSrc.localeCompare('png') === 0){
   obj.setAttribute("src",transImg);
   obj.style.filter=
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+path+"', sizingMethod='scale');"; // IE通过滤镜的方式实现图片显示
   }else{
   throw new Error('File type Error! please image file upload..'); 
   }
  }else{
   imgSrc = fileQuery.value ;
   imgArr = imgSrc.split('.') ;
   strSrc = imgArr[imgArr.length - 1].toLowerCase() ;
   if(strSrc.localeCompare('jpg') === 0 || strSrc.localeCompare('jpeg') === 0 || strSrc.localeCompare('gif') === 0 || strSrc.localeCompare('png') === 0){
   obj.src = fileQuery.value ;
   }else{
   throw new Error('File type Error! please image file upload..') ;
   }
 
  }
 
  } else{
  var file =fileQuery.files[0];
  var reader = new FileReader();
  reader.onload = function(e){
 
   imgSrc = fileQuery.value ;
   imgArr = imgSrc.split('.') ;
   strSrc = imgArr[imgArr.length - 1].toLowerCase() ;
   if(strSrc.localeCompare('jpg') === 0 || strSrc.localeCompare('jpeg') === 0 || strSrc.localeCompare('gif') === 0 || strSrc.localeCompare('png') === 0){
   obj.setAttribute("src", e.target.result) ;
   }else{
   throw new Error('File type Error! please image file upload..') ;
   }
  }
  reader.readAsDataURL(file);
  }
 },
			  show:function(){
					var file_img=document.getElementById("img"),
					iptfileupload = document.getElementById('iptfileupload') ;
					this.getPath(file_img,iptfileupload,file_img);
				},
				show1:function(){
					var file_img = document.getElementById("img1"),
					iptfileuploa = document.getElementById('iptfileuploa');
					this.getPath(file_img,iptfileuploa,file_img);
				}
        // upload_one:function(){
        //    var reader = new FileReader();
				// 	 console.log(reader);
				// 	 reader.readAsDataURL(this.files);
				// 	 reader.onload = function(){
				// 		 document.getElementById("dd").innerHTML += "<img src='"+reader.result+"'>";
				// 	 };
				// }
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
form{
	display:inline-block;
}
.xieyi form{
	position:relative;
}
.xieyi form input.upload{
  opacity:0;
	/*z-index:200;*/
}
.xieyi form a.select_button{
	width:303px;
	height:27px;
  position:absolute;
	/*z-index:100;*/
}
a.select_button:hover{
	color:red;
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