<template>
	<div class="three">
	<div v-title>个人信息</div>
	    <div class="page_title">
		    <span>个人信息<i>Sign Contract</i></span>
		    <el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item>个人信息</el-breadcrumb-item>
	    	</el-breadcrumb>
		</div>	
		<el-row class="page_content">
          <el-col :span="24">
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>真实姓名：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input1" placeholder="Andy"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>邮箱：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input2" placeholder="989746@qq.com"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>手机号码：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input3" placeholder="1388888888"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>身份证号码：</span>
              </el-col>
              <el-col  :xs="16" :sm="16" :md="16" :lg="16">
                <el-input v-model="input4" placeholder="3604211996467461452"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>国家：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input5" placeholder="中国"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>详细地址：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input6" placeholder="广东深圳"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>上传身份证正面：</span>
              </el-col>
              <el-col  class="alignl"   :xs="17" :sm="18" :md="18" :lg="16">
                <div class="file_box">
			  <input type="file" id="card1" accept="image/png, image/jpeg, image/gif, image/jpg">
			  <span class="mask card_mask1">选择文件</span>
			  </div>
              *上传的单张图片大小不要超过2M；否则影响开户！
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>预览：</span>
              </el-col>
              <el-col  :span="16">
                <img id="img1" >
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>上传身份证反面：</span>
              </el-col>
              <el-col  class="alignl"   :xs="17" :sm="18" :md="18" :lg="16">
                <div class="file_box">
                <input type="file" id="card2" accept="image/png, image/jpeg, image/gif, image/jpg">
                <span class="mask card_mask2">选择文件</span>
                </div>
                *上传的单张图片大小不要超过2M；否则影响开户！
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>预览：</span>
              </el-col>
              <el-col  :span="16">
                <img id="img2">
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span>最近登录时间：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input7" placeholder="2017/11/02"></el-input>
              </el-col>
            </el-row>
          </el-col>
		</el-row>
        <div class="page_footer">
		      <a href="javascript:void(0)">修改密码</a>
			 <a href="javascript:void(0)" class="fr">保存修改</a>
		</div>
	</div>	
</template>
<script>
 export default {
    data() {
      return {
		    input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: ''
      };
    },
    methods: {
    
    }
}
</script>
<style scoped>
.three{
	/*position:relative;*/
	/*min-height:100%;*/
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

.page_content{

}
.page_content .li{
    /*height:36px;*/
    margin:15px 0;
}
.page_content .li div{
    /*height:36px;*/
}
.li div span{
    display: block;
    /*height: 36px;*/
    line-height: 36px;
    text-align: right;
    padding-right: 10%;
}

.alignl{
    text-align:left;
}
.page_content .li div.file_box,.page_content .li input,.page_content .file_box span{
	display:inline-block;
	padding:0px;
	width:120px;
	height:36px;
	line-height:36px;
	border-radius:2px;
	border:1px solid #cecdcd;
	text-align:center;
    box-sizing:border-box;
    background:#21b548;
    color:#fff;
}
.page_content .li div.file_box{
	position:relative;
	border:none;
	cursor:pointer;
}
.page_content .li input[type='file']{
	opacity:0;
	position:absolute;
	filter:alpha(opacity=0);
    -moz-opacity:0;
	top:0px;
    left:0px;
	cursor:pointer;
}


.page_footer{
	height: 55px;
  border-top: 1px solid #f4f4f4;
  text-align: left;
  padding: 0 10px;
}
.page_footer a{
	display:inline-block;
	width:80px;
	height:35px;
	margin-top:10px;
	background:#21b548;
	color:#fff;
	text-align:center;
	line-height:35px;
	border-radius:4px;
}
.page_footer a.fr{
    float:right;
}
</style>