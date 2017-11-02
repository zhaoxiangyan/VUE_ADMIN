<template>
	<div class="two">
	<div v-title>账户交易配置</div>
	  <div class="page_title">
		    <span><i class="el-icon-edit"></i>账户交易配置</span>
		    <el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item>账户交易配置</el-breadcrumb-item>
	    	</el-breadcrumb>
		</div>	
		<el-row class="page_content">
			<el-col :xs="24" :sm="24" :md="24" :lg="12">
			    <el-row class="li">
				  <el-col :span="6"  class="li_left">
				    <span>用户协议：</span>
				  </el-col>
				  <el-col :span="18"  class="li_right">
				    	<a class="preview" href="javascript:void(0)"><i class="el-icon-document"></i>您已签约用户协议</a>
          </el-col>
				</el-row>
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>委托扣款协议：</span>
				  </el-col>
				  <el-col :span="18" class="li_right">
				     	<a class="preview" href="javascript:void(0)"><i class="el-icon-document"></i>您已签约委托扣款三方协议</a>
          </el-col>
				</el-row>	
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>账户投资资金：</span>
				  </el-col>
				  <el-col :span="18" class="li_right  capital">
					    <template>
								<el-select v-model="value" placeholder="请选择">
									<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
									</el-option>
								</el-select>
					   	</template>
							<el-input
								placeholder="请输入内容"
								v-model="input1"
								:disabled="true"
								icon="edit">
							</el-input>
          </el-col>
				</el-row>	
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>使用的平台：</span>
				  </el-col>
				  <el-col :span="18" class="li_right platform select100">
					    <template>
								<el-select v-model="value1" placeholder="请选择">
									<el-option
									v-for="item in options1"
									:key="item.value1"
									:label="item.label1"
									:value="item.value1">
									</el-option>
								</el-select>
					  	</template>
          </el-col>
				</el-row>	
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>选择交易账户：</span>
				  </el-col>
				  <el-col :span="18" class="li_right select100">
					    <template>
								<el-select v-model="value2" placeholder="请选择">
									<el-option
									v-for="item in options2"
									:key="item.value2"
									:label="item.label2"
									:value="item.value2">
									</el-option>
								</el-select>
					  	</template>
          </el-col>
				</el-row>	
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>MT4账号编号：</span>
				  </el-col>
				  <el-col :span="18" class="li_right">
					   <el-input v-model="input2" placeholder="请输入MT4账号"></el-input>
          </el-col>
				</el-row>	
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>最大承受风险：</span>
				  </el-col>
				  <el-col :span="18" class="li_right text40">
				  	<el-input v-model="input3" placeholder="自定义金额"></el-input>&nbsp;&nbsp;美元
          </el-col>
				</el-row>	
			</el-col>
			<el-col :xs="24" :sm="24" :md="24" :lg="12">
			    <el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>使用挂机模式：</span>
				  </el-col>
				  <el-col :span="18" class="li_right select100">
					    <template>
								<el-select v-model="value3" placeholder="请选择">
									<el-option
									v-for="item in options3"
									:key="item.value3"
									:label="item.label3"
									:value="item.value3">
									</el-option>
								</el-select>
					  	</template>
          </el-col>
				</el-row>
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>同意挂机费用：</span>
				  </el-col>
				  <el-col :span="18" class="li_right radio35">
					    <template>
								<el-radio class="radio" v-model="radio" label="1">同意</el-radio>
								<el-radio class="radio" v-model="radio" label="2">不同意</el-radio>
					  	</template>
          </el-col>
				</el-row>
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>账户预警设置：</span>
				  </el-col>
				  <el-col :span="18" class="li_right radio35 small_text">
					    <template>
								<el-radio class="radio" v-model="radio1" label="1">30%</el-radio>
								<el-radio class="radio" v-model="radio1" label="2">50%</el-radio>
								<el-radio class="radio" v-model="radio1" label="3">自定义</el-radio>
					  	</template>
						  <el-input v-model="input4" placeholder="自定义预警"></el-input>
          </el-col>
				</el-row>
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>最大回撤选择：</span>
				  </el-col>
				  <el-col :span="18" class="li_right radio35 small_text">
					    <template>
								<el-radio class="radio" v-model="radio2" label="1">30%</el-radio>
								<el-radio class="radio" v-model="radio2" label="2">50%</el-radio>
								<el-radio class="radio" v-model="radio2" label="3">自定义</el-radio>
					  	</template>
					  	<el-input v-model="input5" placeholder="自定义预警"></el-input>
          </el-col>
				</el-row>
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>MT4账户密码：</span>
				  </el-col>
				  <el-col :span="18" class="li_right text100">
				     	<el-input type="password" v-model="password" auto-complete="off" placeholder="请输入MT4账号密码"></el-input>
          </el-col>
				</el-row>
				<el-row class="li">
				  <el-col :span="6" class="li_left">
				    <span>确认MT4账户密码：</span>
				  </el-col>
				  <el-col :span="18" class="li_right text100">
				    	<el-input type="password" v-model="repassword" auto-complete="off" placeholder="请再次输入MT4账号密码"></el-input>
          </el-col>
				</el-row>
			</el-col>
			<el-col :span="24" class="table">
			   <el-row>
				   <el-col :span="12">6个月</el-col>
					 <el-col :span="12"><span>1860.76</span>美金~<span>2040.82</span>美金</el-col>
				 </el-row>
				 <el-row>
				   <el-col :span="12">12个月</el-col>
					 <el-col :span="12"><span>3720.72</span>美金~<span>4080.97</span>美金</el-col>
				 </el-row>
			</el-col>
		</el-row>
		<div class="page_footer">
		   <span>交易有风险，入市须谨慎！</span>
			 <a href="javascript:void(0)">提交</a>
		</div>
	</div>	
</template>
<script>
 export default {
    data() {
      return {
		//   账户投资资金select
		options: [{
          value: '选项1',
          label: '1万美金'
        }, {
          value: '选项2',
          label: '5万美金'
        }, {
          value: '选项3',
          label: '10万美金'
        }, {
          value: '选项4',
          label: '50万美金'
        }],
        value: '',
		input1: 'Enter Number',
		// 使用的平台select
		options1: [{
          value1: '选项1',
          label1: 'MetaQuotes-Demo'
        }, {
          value1: '选项2',
          label1: 'MetaQuotes-Demo'
        }, {
          value1: '选项3',
          label1: 'MetaQuotes-Demo'
        }, {
          value1: '选项4',
          label1: 'MetaQuotes-Demo'
        }],
        value1: '',
		// 选择交易账户   
		options2: [{
          value2: '选项1',
          label2: 'MetaQuotes-Demo'
        }, {
          value2: '选项2',
          label2: 'MetaQuotes-Demo'
        }, {
          value2: '选项3',
          label2: 'MetaQuotes-Demo'
        }, {
          value2: '选项4',
          label2: 'MetaQuotes-Demo'
        }],
        value2: '',
		// MT4账号
		input2: '',
		// 最大承受风险
		input3: '',
		// 使用挂机模式
		options3: [{
          value3: '选项1',
          label3: '超稳模式'
        }, {
          value3: '选项3',
          label3: '超稳模式'
        }, {
          value3: '选项3',
          label3: '超稳模式'
        }, {
          value3: '选项4',
          label3: '超稳模式'
        }],
        value3: '',
		// 同意挂机费用
		radio: '1',
		// 账户预警设置
		radio1: '1',
		input4: '',
		// 最大回撤选择
		radio2: '1',
		input5: '',
		// 账户密码
		password: '',
		// 确认密码
		repassword:''
      };
    },
    methods: {
	
    }
}
</script>
<style scoped>
.two{
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

.page_content{

}
.page_content  .li{
	margin-top:35px;
	/*padding:0 30px;*/
	height:35px;
	text-align:left;
}
.page_content .li a.preview{
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
	margin-right:10px;
}
.page_content .li div{
	height:35px;
}
.page_content .li_left{}
.li_left span{
	display:block;
	height:35px;
	line-height:35px;
	text-align:right;
	padding-right:10%;
	font-weight:bold;
}
.page_content .li_right{
	padding-right:30px;
}
.li_right a{}
.capital .el-select{
	width:40%;
}
.capital .el-input{
	float:right;
	width:50%;
}
.select100 .el-select{
	width:100%;
}
.text40 .el-input{
	width:40%;
}
.radio35{
	line-height:35px;
}
.small_text .el-input{
	float:right;
	width:40%;
}

.table{
	margin:30px 0px;
	padding:0 10px;
}
.table .el-row{
	background:#f9f9f9;
}
.table .el-row .el-col{
	height:50px;
	line-height:50px;
	border:1px solid #f4f4f4;
}
.table .el-row .el-col span{
	color:#dd4b39;
}


.page_footer{
	height: 55px;
  border-top: 1px solid #f4f4f4;
  text-align: left;
  padding: 0 10px;
}
.page_footer span{
	display: inline-block;
  height: 55px;
  line-height: 55px;
}
.page_footer a{
	float:right;
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
</style>