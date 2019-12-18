<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand><router-link to="/"><img alt="logo" src="./assets/logo.png" contain height="50px"></router-link></b-navbar-brand>
    <span>
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="outline-success">검색</b-button>
      </b-nav-form>
    </span>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/boards">레시피 게시판</router-link></b-nav-item>
        <b-nav-item><router-link to="/boards/korean">한식</router-link></b-nav-item>
        <b-nav-item><router-link to="/boards/chinese">중식</router-link></b-nav-item>
        <b-nav-item><router-link to="/boards/japanese">일식</router-link></b-nav-item>
        <b-nav-item><router-link to="/boards/western">양식</router-link></b-nav-item>
        <b-nav-item><router-link to="/boards/others">기타</router-link></b-nav-item>
        <!-- Right aligned nav items -->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <router-link to='/' >마이페이지<br></router-link>
          <router-link v-if="!isLogin()"  to="/login" >Login</router-link>
          <button v-if="isLogin()" v-on:click="signOut" class="body-2 font-weight-bold">Logout</button>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
  </div>
</template>
<script>
import * as firebase from 'firebase/app'
export default {
  methods: {
    isLogin () {
      if (firebase.auth().currentUser) {
        return true
      }
    },
    signOut () {
      firebase.auth().signOut().then(function () {
        alert('정상적으로 로그아웃 되었습니다..!')
        window.location.href = '/'
      })
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
