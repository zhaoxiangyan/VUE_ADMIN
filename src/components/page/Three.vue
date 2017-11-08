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
                 <span class="title">真实姓名：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input1" placeholder="Andy" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span class="title">邮箱：</span>
              </el-col>
              <el-col  :span="16">
                <!--<el-input v-model="input2" placeholder="989746@qq.com"></el-input>-->
<el-input placeholder="请输入邮箱" v-model="input2">
<el-tooltip slot="append" content="修改邮箱" placement="top">
    <el-button  icon="edit" @click="dialogFormVisible = true" ></el-button>
</el-tooltip>    
</el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span class="title">手机号码：</span>
              </el-col>
              <el-col  :span="16">
               <!-- <el-input v-model="input3" placeholder="1388888888"></el-input>-->
<el-input placeholder="请输入手机号码" v-model="input3">
<el-tooltip slot="append" content="修改手机号码" placement="top">
    <el-button  icon="edit" @click="dialogFormVisible1 = true" ></el-button>
</el-tooltip>    
</el-input>                
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span class="title">身份证号码：</span>
              </el-col>
              <el-col  :xs="16" :sm="16" :md="16" :lg="16">
                <el-input v-model="input4" placeholder="3604211996467461452" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span class="title">居住地址：</span>
              </el-col>
              <el-col  :span="16"> 
<!--确定修改居住地址-->
<el-popover
  ref="popover5"
  placement="top"
  width="160"
  v-model="visible2">
  <p>确定修改居住地址吗？</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
  </div>
</el-popover>                           
<el-input v-model="input6" placeholder="如：广东深圳">
    <el-button slot="append" icon="edit" v-popover:popover5 ></el-button>
</el-input>
<!--<v-distpicker></v-distpicker>-->
              </el-col>
            </el-row>
            <el-row class="li">
              <el-col  :xs="7" :sm="6" :md="5" :lg="5">
                 <span class="title">最近登录时间：</span>
              </el-col>
              <el-col  :span="16">
                <el-input v-model="input7" placeholder="2017/11/02" :disabled="true"></el-input>
              </el-col>
            </el-row>
          </el-col>
		</el-row>
        <div class="page_footer">
		      <a href="javascript:void(0)">修改密码</a>
			 <a href="javascript:void(0)" class="fr">保存修改</a>
		</div>
<!--修改邮箱模态框-->
<el-dialog title="修改用户邮箱" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="原邮箱：" :label-width="formLabelWidth">
      <el-input v-model="form.name"  placeholder="请输入旧的邮箱地址"></el-input>
    </el-form-item>
    <el-form-item label="是否收到邮件：" :label-width="formLabelWidth">
      <template>
								<el-radio class="radio" v-model="form.radio" label="1">已接收邮件</el-radio>
								<el-radio class="radio" v-model="form.radio" label="2">邮件未收到</el-radio>
			</template>
      <el-button  type="text">发送邮件至原邮箱</el-button>
    </el-form-item>
    <el-form-item label="新邮箱：" :label-width="formLabelWidth">
      <el-input v-model="form.region"  placeholder="请输入新的邮箱地址"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
<!--修改手机号码模态框-->
<el-dialog title="修改手机号码" :visible.sync="dialogFormVisible1">
  <el-form :model="form1">
    <el-form-item label="旧的手机号码：" :label-width="formLabelWidth1">
      <el-input v-model="form1.name" placeholder="请输入旧的手机号码" ></el-input>
    </el-form-item>
    <el-form-item label="短信验证码：" :label-width="formLabelWidth">
      <el-input class="code_box"  v-model="form1.code" placeholder="请输入短信验证码"></el-input>
      <el-button  type="text">发送短信验证码至原手机号码</el-button>
    </el-form-item>
    <el-form-item label="新的手机号码：" :label-width="formLabelWidth1">
      <el-input v-model="form1.region" placeholder="请输入新的手机号码" ></el-input>    
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
  </div>
</el-dialog>
	</div>	
</template>
<script>
// import VDistpicker from 'v-distpicker'
// Vue.component('v-distpicker',VDistpicker)
 export default {
    data() {
      return {
		    input1: '赵',
        input2: '9876710@qq.com',
        input3: '1517982',
        input4: '360421199311104214',
        input6: '',
        input7: '2017/11/02', 
        // 修改邮箱模态框
        dialogFormVisible: false,
        form: {
          name: '',
          radio: '1',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        // 修改手机号码模态框
        dialogFormVisible1: false,
        form1: {
          name: '',
          code: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth1: '120px',
        // 确定修改居住地址
        visible2: false
      }
    },
    components:{
      // VDistpicker
    },
    methods: {
      // 城市选择器
  
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
.li div span.title{
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
/*模态框element样式*/
.el-input.code_box{
  width:150px;
}
</style>