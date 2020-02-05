<template lang="html">
  <div>
    <div class="mask" @click="clickMask"></div>
    <transition name="fade">
      <div class="login-information" v-if="showLogin">
        <div class="login-content" v-show="showContent">
          <div class="login-head">
            <div class="avatar">
              <img src="http://img4.imgtn.bdimg.com/it/u=1694681277,1453280371&fm=26&gp=0.jpg">
            </div>
            <div class="username">邓某某</div>
          </div>
          <div class="login-list">
            <ul>
              <router-link to="/collection"><li><img src="../assets/collection.png">我的收藏</li></router-link>
              <li @click="gyuws(1)"><img src="../assets/aboutme.png">关于我</li>
              <li @click="cancel"><img src="../assets/cancel.png">注销</li>
            </ul>
          </div>
        </div>
        <div class="nologin" v-show="showNologin">
          <div class="nologin-content">
            <input type="text" placeholder="账号：邓某某" v-model="username.name" >
            <input type="password" placeholder="密码：123456" v-model="username.pwd">
            <button @click="clickLogin">登录</button>
            <div class="register">
              <span @click="shux(1)">立即注册</span>
              <span @click="shux(2)">忘记密码</span>
            </div>
          </div>
        </div>
        <div class="Intro" v-show="gyuw">
          <div class="Intro_1"><img src="http://img4.imgtn.bdimg.com/it/u=1694681277,1453280371&fm=26&gp=0.jpg"></div>
          <span>你好，我是邓某某</span>
          <p>来自湖南郴州</p>
          <p>QQ邮箱：1871239745@qq.com</P>
          <div class="fanghui" @click="gyuws(2)">返回</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: {
        name: "邓某某",
        pwd: "123456"
      },
      showContent: true,
      showNologin: false,
      gyuw: false
    };
  },
  created() {
    this.$store.commit("muShowLogin", false);
  },
  methods: {
    clickMask() {
      this.$store.state.showMy = false;
      this.$store.state.showLogin = false;
    },
    cancel() {
      this.showContent = false;
      this.showNologin = true;
    },
    clickLogin() {
      if (this.username.name != "邓某某" || this.username.pwd != "123456") {
        alert("账号或者密码错误！！！");
      } else {
        this.showContent = true;
        this.showNologin = false;
      }
    },
    shux(value) {
      alert("功能暂时关闭!!!");
    },
    gyuws(value) {
      if (value == 1) {
        this.showContent = false;
        this.gyuw = true;
      } else if (value == 2) {
        this.showContent = true;
        this.gyuw = false;
      }
    }
  },
  computed: {
    showLogin() {
      return this.$store.state.showLogin;
    }
  }
};
</script>

<style lang="css" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}
.login-information {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 3rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  z-index: 101;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter {
  transform: translateX(-100%);
}
.login-content,
.nologin {
  width: 90%;
  height: 100%;
}
.login-head {
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  color: #888;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.27rem;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.login-list {
  margin-top: 0.8rem;
  font-size: 0.43rem;
  color: #404040;
}
.login-list ul li {
  height: 1.2rem;
  line-height: 1.2rem;
  display: block;
  border-bottom: 1px solid #ccc;
}
.login-list img {
  width: 0.64rem;
  height: 0.64rem;
  vertical-align: middle;
  margin-right: 0.8rem;
}
.nologin-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.33rem;
}
.nologin-content input {
  width: 80%;
  height: 1.07rem;
  margin-bottom: 0.53rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #888;
}
.nologin-content button {
  width: 80%;
  height: 1rem;
  background-color: #f33;
  border: 1px solid #f33;
  color: #fff;
  letter-spacing: 5px;
  border-radius: 3px;
}
.register {
  width: 90%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.register span:last-child {
  color: red;
}
.Intro {
  /* background-color: #888; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.Intro .Intro_1 img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 15px;
}
.Intro span {
  font-weight: bold;
  font-size: 0.5rem;
}
.Intro p {
  font-weight: bold;
  color: #ccc;
}
.Intro .fanghui {
  margin-top: 50px;
  border: 1px seagreen solid;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  text-align: center;
  line-height: 5em;
  color: #fff;
  background-color: seagreen;
  font-size: 0.5rem;
}
</style>
