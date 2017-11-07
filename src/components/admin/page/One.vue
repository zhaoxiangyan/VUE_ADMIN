<template>
	<div class="one">
	<div v-title>签约协议</div>
	    <div class="page_title">
		    <span>签约协议<i>Sign Contract</i></span>
		    <el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{path:'/system/home'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item>签约协议</el-breadcrumb-item>
	    	</el-breadcrumb>
		</div>	
		<ul class="page_content">
		  <li>
		    <form @submit.prevent="uploadUserPDF">
		    <el-row class="li"  :gutter="30">
			  <el-col  :xs="24" :sm="18" :md="12" :lg="8">
		        <a class="preview" href="http://192.168.0.133/file/agreement.pdf" target="_blank"><i class="el-icon-document"></i>三方合作协议</a>
			  </el-col>
			  <el-col   :xs="24" :sm="6" :md="8" :lg="4">
			     <a class="download" href="http://192.168.0.133/file/agreement.zip">下载协议</a>
			  </el-col>
			</el-row>  
			<p>*请上传签约后的pdf文件</p>
			<el-row class="li" :gutter="30">
			  <el-col  :xs="24" :sm="24" :md="24" :lg="24">
				<div class="file_box">
				<input type="file" id="user_file" accept="application/pdf" @change="uploadUser()">
				<span class="mask user_mask">{{user}}</span>
				</div>
				<input type="submit" value="提交">
			  </el-col> 
			</el-row>  
			</form>
			<form @submit.prevent="uploadUserIMG">
			<p>*或上传签约后的文件图片，支持上传png/jpeg/gif/jpg格式的图片</p>
			<el-row class="li" :gutter="30">
			  <el-col  :xs="24" :sm="24" :md="24" :lg="24">
				<div class="file_box">
				<input type="file" id="user_file1" accept="image/png, image/jpeg, image/gif, image/jpg"  @change="uploadUser1()">
				<span class="mask user_mask1">{{user1}}</span>
				</div>
				<div class="file_box">
				<input type="file" id="user_file2" accept="image/png, image/jpeg, image/gif, image/jpg"  @change="uploadUser2()">
				<span class="mask user_mask2">{{user2}}</span>
				</div>
				<div class="file_box">	
				<input type="file" id="user_file3" accept="image/png, image/jpeg, image/gif, image/jpg"  @change="uploadUser3()">
				<span class="mask user_mask3">{{user3}}</span>
				</div>
				<input type="submit" value="提交">
			  </el-col> 
			</el-row>  
			  <p>*您如果同意签约，请先下载协议，打印后签名，再扫描上传已签约的协议，再提交审核</p>
			</form>
		  </li>
		  <li>
		    <form  @submit.prevent="uploadDebitPDF">
		    <el-row class="li" :gutter="30">
			 <el-col  :xs="24" :sm="18" :md="12" :lg="8">
		      <a class="preview" href="http://192.168.0.133/file/agreement.pdf" target="_blank"><i class="el-icon-document"></i>委托扣款协议</a>
			 </el-col>
			 <el-col  :xs="24" :sm="6" :md="8" :lg="4">
			  <a class="download" href="http://192.168.0.133/file/agreement.zip">下载协议</a>
			 </el-col>
			</el-row>
			<p>*请上传签约后的pdf文件</p>
			<el-row class="li" :gutter="30">
			  <el-col  :xs="24" :sm="24" :md="24" :lg="24">
				<div class="file_box">
				<input type="file" id="debit_file" accept="application/pdf"  @change="uploadDebit()" name="withholdPic">
				<span class="mask user_mask">{{debit}}</span>
				</div>
				<input type="submit" value="提交">
			  </el-col> 
			</el-row>  
			</form>
			<form  @submit.prevent="uploadDebitIMG">
			<p>*或上传签约后的文件图片，支持上传png/jpeg/gif/jpg格式的图片</p>
			<el-row class="li" :gutter="30">
			 <el-col  :xs="24" :sm="24" :md="24" :lg="24">
			  <div class="file_box">
			  <input type="file" id="debit_file1" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadDebit1()" name="withholdPic">
			  <span class="mask user_mask1">{{debit1}}</span>
			  </div>
			  <div class="file_box">
			  <input type="file" id="debit_file2" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadDebit2()" name="withholdPic">
			  <span class="mask user_mask2">{{debit2}}</span>
			  </div>
			  <input type="submit" value="提交">
			  <em class="error" v-show="error.debit">{{error.debit_text}}</em>
			 </el-col> 
			</el-row>  
			  <p>*您如果同意签约，请先下载协议，打印后签名，再扫描上传已签约的协议，再提交审核</p>
		    </form>
		  </li>
		</ul>	  
	</div>	
</template>
<script>
 export default {
    data() {
      return {
    //    三方协议pdf
	     user:'上传协议pdf文件',
		 user_file:false,
	//    三方协议img
         user1:'上传协议第一页',
		 user2:'上传协议第二页',
		 user3:'上传协议第三页',
		 user_file1:false,
		 user_file2:false,
		 user_file3:false,
	//    扣款协议pdf
	     debit:'上传协议pdf文件',
		 debit_file:false,
	//    扣款协议img
         debit1:'上传协议第一页',
		 debit2:'上传协议第二页',
		 debit_file1:false,
		 debit_file2:false,
		//  上传出错
		 error:{
			//  扣款协议pdf
            user:false,
			user_text:'协议上传错误',
			//  扣款协议img
            user1:false,
			user_text1:'协议上传错误',
			//  扣款协议pdf
            debit:false,
			debit_text:'协议上传错误',
			//  扣款协议img
            debit1:false,
			debit_text1:'协议上传错误'
		 }
      };
    },
    methods: {
		// 三方合作协议pdf文件
		uploadUser(){
			var self = this;
			var reader = new FileReader();
			var file = document.getElementById("user_file").files[0];
			self.user = file.name;
			//读取文件过程方法
			reader.onload = function (e) {
				console.log("成功读取....");
				self.user_file = true;
			}
			reader.readAsDataURL(file)
		},
		uploadUserPDF() {
			var self = this;
		      self.error.user = false;
			if(self.user_file == false){
					self.error.user_text = '上传协议出错';
					self.error.user = true;
					return false;
			}else {
				var image = new FormData();
				image.append('withholdPic',document.getElementById("user_file").files[0]);
				self.$http({
					method: 'post',
					url: '/turingcloud/upload/withholdPic',
					data:image
				}).then(function(res){
				//    alert(res.data);
					if(res.data == true){
						alert('协议上传成功，请等待审核');
					}else{
						alert('Error：协议上传出错');
					}
				}).catch(function(err){
					alert("AJAX失败");
				});
			}
	    },		
		// 三方合作协议img文件
		uploadUser1(){
			var self = this;
			var reader = new FileReader();
			var file = document.getElementById("user_file1").files[0];
			self.user1 = file.name;
			//读取文件过程方法
			reader.onload = function (e) {
				console.log("成功读取....");
				self.user_file1 = true;
			}
			reader.readAsDataURL(file)
		},
		uploadUser2(){
			var self = this;
			var reader = new FileReader();
			var file = document.getElementById("user_file2").files[0];
			self.user2 = file.name;
			//读取文件过程方法
			reader.onload = function (e) {
				console.log("成功读取....");
				self.user_file2 = true;
			}
			reader.readAsDataURL(file)
		},
		uploadUser3(){
			var self = this;
			var reader = new FileReader();
			var file = document.getElementById("user_file3").files[0];
			self.user3 = file.name;
			//读取文件过程方法
			reader.onload = function (e) {
				console.log("成功读取....");
				self.user_file3 = true;
			}
			reader.readAsDataURL(file)
		},
		uploadUserIMG() {
			var self = this;
		      self.error.user1 = false;
			if(self.user_file1 == false){
					self.error.user_text1 = '上传协议第一页出错';
					self.error.user1 = true;
					return false;
			} else if(self.user_file2 == false){
					self.error.user_text1 = '上传协议第二页出错';
					self.error.user1 = true;
					return false;
			} else if(self.user_file3 == false){
					self.error.user_text1 = '上传协议第三页出错';
					self.error.user1 = true;
					return false;
			} else {
				var image = new FormData();
				image.append('withholdPic',document.getElementById("user_file1").files[0]);
				image.append('withholdPic',document.getElementById("user_file2").files[0]);
				image.append('withholdPic',document.getElementById("user_file3").files[0]);
				self.$http({
					method: 'post',
					url: '/turingcloud/upload/withholdPic',
					data:image
				}).then(function(res){
				//    alert(res.data);
					if(res.data == true){
						alert('协议上传成功，请等待审核');
					}else{
						alert('Error：协议上传出错');
					}
				}).catch(function(err){
					alert("AJAX失败");
				});
			}
	    },
        // 委托扣款协议pdf文件
		uploadDebit(){
			var self = this;
			var reader = new FileReader();
			var file = document.getElementById("debit_file").files[0];
			self.debit = file.name;
			//读取文件过程方法
			reader.onload = function (e) {
				console.log("成功读取....");
				self.debit_file = true;
			}
			reader.readAsDataURL(file)
		},
		uploadDebitPDF() {
			var self = this;
		      self.error.debit = false;
			if(self.debit_file == false){
					self.error.debit_text = '上传协议出错';
					self.error.debit = true;
					return false;
			}else {
				var image = new FormData();
				image.append('withholdPic',document.getElementById("debit_file").files[0]);
				self.$http({
					method: 'post',
					url: '/turingcloud/upload/withholdPic',
					data:image
				}).then(function(res){
				//    alert(res.data);
					if(res.data == true){
						alert('协议上传成功，请等待审核');
					}else{
						alert('Error：协议上传出错');
					}
				}).catch(function(err){
					alert("AJAX失败");
				});
			}
	    },		
		// 委托扣款协议img文件
		uploadDebit1(){
			var self = this;
			var reader = new FileReader();
			var file = document.getElementById("debit_file1").files[0];
			self.debit1 = file.name;
			//读取文件过程方法
			reader.onload = function (e) {
				console.log("成功读取....");
				self.debit_file1 = true;
			}
			reader.readAsDataURL(file)
		},
		uploadDebit2(){
			var self = this;
			var reader = new FileReader();
			var file = document.getElementById("debit_file2").files[0];
			self.debit2 = file.name;
			//读取文件过程方法
			reader.onload = function (e) {
				console.log("成功读取....");
				self.debit_file2 = true;
			}
			reader.readAsDataURL(file)
		},
		uploadDebitIMG() {
			var self = this;
		      self.error.debit1 = false;
			if(self.debit_file1 == false){
					self.error.debit_text1 = '上传协议第一页出错';
					self.error.debit1 = true;
					return false;
			} else if(self.debit_file2 == false){
					self.error.debit_text1 = '上传协议第二页出错';
					self.error.debit1 = true;
					return false;
			} else {
				var image = new FormData();
				image.append('withholdPic',document.getElementById("debit_file1").files[0]);
				image.append('withholdPic',document.getElementById("debit_file2").files[0]);
				self.$http({
					method: 'post',
					url: '/turingcloud/upload/withholdPic',
					data:image
				}).then(function(res){
				//    alert(res.data);
					if(res.data == true){
						alert('协议上传成功，请等待审核');
					}else{
						alert('Error：协议上传出错');
					}
				}).catch(function(err){
					alert("AJAX失败");
				});
			}
	    }
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
.page_content li{
	margin:30px 0 45px;
	padding:0 30px;
	text-align:left;
}
.page_content li a.preview{
	box-sizing:border-box;
	display:inline-block;
	width:100%;
	height:35px;
	color:#fff;
	background:#21b548;
	border-radius:3px;
	border:1px solid #1a913a;
	line-height:35px;
	text-align:left;
	/*margin-right:30px;*/
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
.page_content li a.download,.page_content li div.file_box,.page_content li input,.page_content li div span{
	display:inline-block;
	/*margin:0 10px 10px 0;*/
	margin-bottom:10px;
	padding:0;
	min-width:90px;
	height:35px;
	line-height:35px;
	border-radius:2px;
	border:1px solid #b4b1b2;
	text-align:center;
}
.page_content li div span{
	padding:0 5px;
}
.page_content li div.file_box{
	position:relative;
	border:none;
	cursor:pointer;
	vertical-align:middle;
}
.page_content li a.download{
	box-sizing:border-box;
	color:#000;
	vertical-align:middle;	
}
.page_content li a.download:hover{

}
.page_content li input{
}
.page_content li input[type='file']{
	opacity:0;
	position:absolute;
	filter:alpha(opacity=0);
    -moz-opacity:0;
	top:0px;
    left:0px;
	cursor:pointer;
	width:100%;
}
.page_content li div span{
	cursor:pointer;
    box-sizing:border-box;
   	overflow:hidden;
}
.page_content li span.mask_user1{
}
.page_content li span.mask_user2{}
.page_content li span.mask_user3{}
.page_content li input[type='submit']{
	background:#fff;
	cursor:pointer;
	vertical-align:middle;
}
.page_content li p{
	margin-top:10px;
	color:#797878;
	font-size:15px;
}

.li .el-col{
	margin:10px 0;
}

em.error{
	font-style:normal;
	color:red;
}
@media screen and (max-width: 1230px) {
    
}


</style>