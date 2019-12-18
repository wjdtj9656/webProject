<template>
    <div class="signup">
        <div class="signup-container">
            <div class="signup-banner">
                <router-link to='/'>
                    <img class="logo" src="../assets/logo.png" alt="">
                </router-link>
            </div>
        </div>
        <hr>
        <div class="signup-container">
            <h1>회원가입</h1>
            <div class="clear"></div>
            <div class="signup-buttons-container">
                <span class="signup-google signup-button" @click ="GoogleSignIn">
                    <span class="icon-google-plus"></span>
                    <span class="socialAuth">
                        <span class="socialSignUp"></span>
                        <span class="socialLogIn"></span>
                        구글
                    </span>
                </span>
                <span class="signup-facebook signup-button" @click ="FacebookSignIn">
                    <span class="icon-facebook"></span>
                    <span class="socialAuth">
                        <span class="socialSignUp"></span>
                        <span class="socialLogIn"></span>
                        페이스북
                    </span>
                </span>
                <span class="signup-apple signup-button" @click="TwitterSignIn" >
                    <span class="icon-apple"></span>
                    <span class="socialAuth">
                        <span class="socialSignUp"></span>
                        <span class="socialLogIn"></span>
                        트위터
                    </span>
                </span>
            </div>
            <div class="clear"></div>
            <div class="signup-text">구글, 페이스북, 트위터로
                <span class="socialSignUp">가입하기를</span>
                <span class="socialLogIn">로그인을</span> 클릭하면
                <a href="" target="_blank">이용약관</a>과
                <a href="" target="_blank">개인정보처리방침</a>에 동의한 것으로 간주됩니다.
            </div>
            <div class="signup-heading" style="padding-top:0;margin-top:0">
                <span>또는</span>
            </div>
            <div id="frmSignupContainer">
                <div class="signup-text noPadding">
                    <div class="bold alignTextCenter">이메일 주소로 가입하기</div>
                    <div class="clear"></div>
                    <div class="inputContainer">
                        <input type="email" v-model="email" name="txtEmail" id="txtEmail-su" pattern="^[a-zA-Z0-9.!#$%&amp;'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" maxlength="100" class="input" required="required" placeholder="이메일">
                        <ul id="errorList_txtEmail" class="error-list text-danger" style="list-style:disc;margin:5px 5px 5px 15px">  </ul>
                    </div>
                    <div class="clear"></div>
                    <div class="inputContainer">
                        <input type="password" v-model="password" name="txtPassword" id="txtPassword-su" class="input" required="required" placeholder="비밀번호" value="">
                        <ul id="errorList_txtPassword" class="error-list text-danger" style="list-style:disc;margin:5px 5px 5px 15px">  </ul>
                    </div>
                    <div class="clear"></div>
                    <!-- <div class="inputContainer">
                        <input type="password" name="txtPasswordConfirm" id="txtPasswordConfirm-su" class="input" required="required" placeholder="비밀번호 확인" value="">
                        <ul id="errorList_txtPasswordConfirm" class="error-list text-danger" style="list-style:disc;margin:5px 5px 5px 15px">  </ul>
                    </div> -->
                    <div class="clear"></div>
                </div>
                <div class="signup-text noPadding">가입하기를 클릭하여
                    <a href="" target="_blank">이용약관</a>과
                    <a href="" target="_blank">개인정보처리방침</a>에 동의합니다.
                </div>
                <div class="signup-text fr24-btn-text">
                    <button @click="signUp" class="signup-button signup-login" id="signup">가입하기</button>
                </div>
            </div>
            <div class="clear"></div>
            <div id="btnSigninContainer">
                 <router-link to="Login" id="btnSignin">이미 계정이 있습니다.</router-link>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'

export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // 이메일로그인
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('계정이 생성되었습니다.')
        },
        function (err) {
          alert(err.message)
        }
      )
    },
    // 소셜로그인
    async GoogleSignIn () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      console.log(r)
    },
    async FacebookSignIn () {
      const provider = new this.$firebase.auth.FacebookAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      console.log(r)
    },
    async TwitterSignIn () {
      const provider = new this.$firebase.auth.TwitterAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      console.log(r)
    }
  }
}
</script>

<style scoped>
article.noPadding {
 padding:0 !important
}
.signup {
 background:#fff;

 margin:0 auto;
 height:100%;
 padding:45px 0 30px 0;
 font-family:"Open Sans", Helvetica Neue, Arial, sans-serif
}
.signup .signup-container {
 max-width:465px;
 margin:0 auto;
 height:100%
}
.signup .signup-container.full h5 {
 margin-bottom:20px
}
.signup .signup-container h1 {
 margin:0;
 padding:30px 0px 10px 0px;
 text-align:center;
 margin-bottom:10px;
 font-family:'Roboto Condensed', sans-serif;
 font-size:24px;
 color:#393939
}
.signup .signup-container h4 {
 text-align:center
}
.signup .signup-container h5 {
 text-align:center;
 margin-bottom:40px
}
.signup .signup-container a {
 text-decoration:underline;
 font-size:16px
}
.signup .signup-container a.close {
 margin-top:8px;
 float:right;
 text-align:right
}
.signup .signup-container .bgWhite{
 background:#f5f5f6
}
.signup .signup-container .inputContainer {
 margin:10px 0;
 padding:0 12px 0 0;
}
.signup .signup-container .input {
 width:100%;
 font-size:14px;
 font-weight:400;
 border:1px solid #d1d0d0;
 height:45px;
 padding:0 0 0 10px;
 background:#fff;
 border-radius:0px !important;
 -webkit-appearance:none;
 -moz-appearance:none;
 appearance:none;
 outline:none
}
.signup .signup-container .input:focus {
 background:#eff8fd;
 border-left:4px solid #64bef1;
 padding:0 0 0 7px
}
.signup .signup-container .input.success,
.signup .signup-container .input.filled {
 border-left:4px solid #96dd84;
 padding:0 0 0 7px
}
.signup .signup-container .input option {
 background:#eff8fd;
 padding:10px
}
.signup .signup-container .gray {
 color:#ababab
}
.signup .signup-container .gray:focus {
 color:#333
}
.signup .signup-container .noPadding {
 padding:0 !important
}
.signup .signup-container .alignLeft {
 text-align:left
}
.signup .signup-container .signup-banner {
 text-align:center
}
.signup .signup-container .signup-banner .logo {
 width:250px;
 margin:0 auto
}
.signup .signup-container .bold {
 font-weight:600;
 font-size:16px
}
.signup .signup-container .bold label {
 font-weight:400
}
.signup .signup-container .regular {
 font-size:13px
}
.signup .signup-container .big {
 font-size:16px !important
}
.signup .signup-container .signup-heading {
 color:#6d6d6d;
 text-align:center;
 border-top:1px solid #d1d0d0;
 line-height:0px;
 margin:20px 0;
 font-size:16px;
 font-weight:600
}
.signup .signup-container .signup-heading.small {
 width:40px;
 margin:20px auto;
 border:none;
 float:left
}
.signup .signup-container .signup-heading>span {
 background:#fff;
 padding:0 15px
}
.signup .signup-container .signup-text {
 font-size:10px;
 padding:20px 0
}
.signup .signup-container .signup-text a {
 font-size:10px
}
.signup .signup-container .btn-text {
 padding:10px 0px 5px 0px
}
.signup .signup-container .socialLogIn {
 display:none
}
.signup .signup-container .signup-buttons-container {
 display:-webkit-box;
 display:-webkit-flex;
 display:-ms-flexbox;
 display:flex;
 -webkit-box-pack:justify;
 -webkit-justify-content:space-between;
 -ms-flex-pack:justify;
 justify-content:space-between
}
.signup .signup-container .signup-button {
 font-size:14px;
 font-family:'Roboto Condensed', sans-serif;
 font-weight:500;
 width:100%;
 height:40px;
 color:#fff;
 text-align:left;
 font-size:20px;
 padding:0;
 cursor:pointer;
 display:inline-block;
 text-decoration:none;
 position:relative;
 display:-webkit-box;
 display:-webkit-flex;
 display:-ms-flexbox;
 display:flex;
 -webkit-box-pack:center;
 -webkit-justify-content:center;
 -ms-flex-pack:center;
 justify-content:center
}
.signup .signup-container .signup-button span.icon-google-plus {
 display:block;
 background:#fff url(../assets/icon_google-plus.svg) center center no-repeat;
 background-size:18px 18px;
 width:37px;
 height:37px
}
.signup .signup-container .signup-button span.socialAuth {
 font-size:14px;
 line-height:40px;
 font-weight:500
}
.signup .signup-container .signup-button span.icon-facebook {
 display:block;
 background:url(../assets/icon_facebook.svg) center center no-repeat;
 background-size:22px auto;
 width:37px;
 height:37px
}
.signup .signup-container .signup-button span.icon-apple {
 display:block;
 background:url(../assets/icon_twitter.svg) center center no-repeat;
 background-size: 23px auto;
 width:37px;
 height:37px
}
.signup .signup-container .signup-button span.fa {
 float:left;
 font-size:42px;
 margin:0;
 position:absolute;
 left:20px
}
.signup .signup-container .signup-button span.fa.fa-spin {
 font-size:30px;
 display:none;
 margin-top:-5px
}
.signup .signup-container .signup-button.signup-login {
 font-family:"Open Sans";
 font-size:15px;
 font-weight:600;
 text-align:center;
 border:none;
 background-color:#fd9d28;
 padding:0
}
.signup .signup-container .signup-button.signup-login:hover {
 background-color:#96dd84
}
.signup .signup-container .signup-facebook,
.signup .signup-container .signup-google,
.signup .signup-container .signup-apple {
 width:140px
}
.signup .signup-container .signup-facebook {
 background:#3C5A99;
 color: #fff
}
.signup .signup-container .signup-google {
 background:#fff;
 box-shadow:0 0 0 1px #a4a1a1 inset;
 color:#393939
}
.signup .signup-container .signup-apple {
 background:#1DA1F2;
 color:#fff
}
.signup .signup-container .icon-error {
 padding:0;
 color:#feafae
}
.signup .signup-container .icon-success {
 padding:3px 6px;
 color:#caeec2
}
.signup .signup-container #btnSignupContainer,
.signup .signup-container #btnSigninContainer {
 font-size:16px
}
.signup hr {
 background:#fd9f28;
 border:none;
 width:100%;
 height:5px;
 padding:0;
 margin:15px 0 10px 0
}
@media (max-width: 800px) {
 .signup .signup-container .signup-button.signup-login {
  margin:20px 0
 }
}
@media (max-width: 500px) {
 .signup {
  padding:15px 15px 30px 15px
 }
 .signup .signup-container h1 {
  padding-top:15px;
  font-size:24px
 }
 .signup .signup-container h5 {
  margin-bottom:20px
 }
}
@media (max-width: 414px) {
 .signup .signup-container .signup-button {
  font-size:16px;
  width:100%
 }
 .signup .signup-container .signup-button>span {
  left:15px
 }
 .signup .signup-container .signup-button span.fa {
  left:8px
 }
 .signup .signup-container .signup-button span.fa.fa-spin {
  font-size:22px
 }
 .signup .signup-container .signup-facebook>span {
  margin-top:0px
 }
 .signup .signup-container .signup-google>span {
  margin-top:-6px
 }
 .signup .signup-container .signup-heading {
  width:100%
 }
 .signup .signup-container .signup-heading.small {
  width:50%;
  border-top:1px solid #d1d0d0;
  margin-left:25%
 }
}
</style>
