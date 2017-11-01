<template>
    <div class="add">
     <form @submit.prevent="confirm" method="post">
      <input type="text" name="test" v-model="name" >
      <input type="submit" >
     </form>
    </div>
</template>
<script>
    export default {
        name: 'Add',
        data() {
            return {
                name: '赵相炎' 
            }
        },
        methods: {
            confirm() {
                var self = this;
           
                    // var image = new FormData();
                    // image.append('test',self.name);
                    // image.append('idcard',self.card);
                    // image.append('MT4Account',self.mt4);
                    // image.append('email',self.email);
                    // image.append('password',self.password);
                    // image.append('idcardPic',document.getElementById("file1").files[0]);
                    // image.append('idcardPic',document.getElementById("file2").files[0]);
                    self.$http({
                        method: 'post',
                        url: '/turingcloud/test',
                        // headers: { "Content-Type": "multipart/form-data;charset=UTF-8"},
                        headers: { 'Content-Type': 'application/json;charset=UTF-8'},
                        // data: image
                        dataType: 'json',
                        data: {
                            'test':self.name                       
                        }
                    }).then(function(res){
                       alert(res.data);
                    }).catch(function(err){
                       alert("AJAX失败");
                    });
                }
        }
    }
</script>
<!-- scoped  样式只对当前组件起作用 -->
<style scoped>
 * {
      box-sizing: border-box;
}
ul,ol,li{
    list-style:none;
}
.add{
    width:100%;
    /*height:100%;*/
    background:#324157;
    /*min-height:800px;*/
    /*min-height:1100px;*/
    min-height:100%;
    min-width:450px;
    padding:60px 0;
}
.add div.box{
    width:420px;
    /*position:relative;*/
    margin:0px auto;
    background:#fff;
    border-radius:5px;
    border:1px solid #fff;
    /*top:60px;*/
}
#add_title{
    width:100%;
    text-align:center;
    border-bottom:1px solid #e8e8e8;
    height:50px;
}
#add_title span{
   display:inline-block;
   padding:0 5px;
   height:50px;
   line-height:50px; 
   color:#333;
   border-bottom:2px solid #000;
}
.add_div{
    width:420px;
    margin:0 auto;
    overflow:hidden;
}
.add_box{
    width:360px;
    /*min-height:370px;*/
    margin:0 auto;
    padding:20px 0;
}
.tab{
    width:220px;
    height:40px;
    margin:10px auto;
}
.tab li{
    display:inline-block;
    width:100px;
    text-align:center;
    line-height:40px;
    font-size:16px;
    cursor:pointer;
}
.tab li.active{
   color:#3175d1;
}
/*手机用户注册*/
.add_personal{
    
}
.add_personal p{
    margin:10px 0;
    border:1px solid #ddd;
    padding:0 15px;
    border-radius:20px;
    background:#fff;
}
.input_title{
    width:100px;
    color:#000;
}
.input_title{
    display:inline-block;
    height:40px;
    line-height:40px;
    font-size:14px;
    text-align:right;
}
.input_content{
    display:inline-block;
    height:40px;
    line-height:40px;
    font-size:14px;
    width:220px;
}
#img1,#img2{
    display:none;
    max-width:100%;
    max-height:150px;
}
.file_box{
    position:relative;
}
.file_box input{
    opacity:0;
}
.file_box a{
    position:absolute;
    color:#3175d1;
    display:inline-block;
    width:220px;
    height:40px;
    text-align:left;
    line-height:40px;
    font-size:15px;
}
span.tips{
    display:block;
    font-size:14px;
    text-align:left;
    color: #76838f;
}
.checked_div{
    padding-left:15px;
    font-size:14px;
    color:#666;
    margin:10px 0;
    text-align:left;
}
#checkbox{
    width:15px;
    height:15px;
    display:inline-block;
    background:#fff;
    vertical-align:-3px;
}
.checked_div a{
    color:#3175d1;
    font-size:14px;
}
.phone-submit{
    width:100%;
}
#submit{
    display: inline-block;
    background: #3175d1;
    color: #fff;
    margin: 10px 0;
    border: 1px solid #ddd;
    padding: 0 15px;
    border-radius: 20px;
    line-height: 40px;
    height: 40px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
}
#submit:disabled {
    background: #ddd;
    color: #999;
}
.error{
    color:red;
    font-size:14px;
}

</style>