<template>
  <div>
    <Header/>

    <div class="login-content">
      <div class="login-flex">
        <div class="login-left"></div>
        <!---->
        <div class="login-box">
          <h3 class="login-title">实名认证</h3>
          <form action="" id="renZ_Submit">
            <div class="alert-input">
              <input type="text" class="form-border user-name" name="username" v-model="name" @blur="checkName" placeholder="请输入您的真实姓名">
              <div class="err">{{nameErr}}</div>
              <p class="prompt_name"></p>
              <input type="text" class="form-border user-sfz" name="sfz" v-model="idCard" @blur="checkIdCard" placeholder="请输入15位或18位身份证号">
              <div class="err">{{idCardErr}}</div>
              <p class="prompt_sfz"></p>
              <input type="text" class="form-border user-num" name="mobile" v-bind:value="phone" readonly placeholder="请输入11位手机号">
              <p class="prompt_num"></p>
              <div class="form-yzm form-border">
                <input class="yzm-write" type="text" v-model="code" @blur="checkCode" placeholder="输入短信验证码">
                <input class="yzm-send" type="text" value="获取验证码" disabled="disabled" id="yzmBtn" readonly="readonly" >
              </div>
              <div class="err">{{codeErr}}</div>
              <p class="prompt_yan"></p>
            </div>
            <div class="alert-input-agree">
              <input type="checkbox" v-model="agree">我已阅读并同意<a href="javascript:;" target="_blank">《金融网注册服务协议》</a>
            </div>
            <div class="alert-input-btn">
              <input type="button" @click="requestRealname" class="login-submit" value="认证">
            </div>
          </form>
          <div class="login-skip">
            暂不认证？ <a href="javascript:;" @click="goLink('/page/user/usercenter')">跳过</a>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "RealNameView",
  components:{
    Header,
    Footer,
  },

}
</script>

<style scoped>

</style>