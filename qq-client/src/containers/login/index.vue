<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input type="password" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
         </el-form>
    </div> 
</template>

<script>
import {loginuser} from '../../api/user'
import {setSession} from '@/utils'
export default {
 name:"Login",
 data(){
     return {
         ruleForm:{
             username:null,
             password:null
         },
          rules: {
            username: [
                { required: true, message: '请输入正确的用户名',trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入正确密码', trigger: 'blur' }
            ]
        }
     }
 },

 methods:{
    getData(){
         loginuser(this.ruleForm).then(res=>{
             console.log(res)
             if(res.data.code===1){
                  this.$message('这是一条成功的消息');
                  this.$store.commit('SAVE_TOKEN',{token:res.data.token})
                //   sessionStorage.setItem('token',res.data.token)
                setSession("token",res.data.token)
                  this.$router.push('/music/rank')
             }
         })
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.getData()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
 }

}
</script>

<style>

</style>
