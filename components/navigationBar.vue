<template>
  <div class="main-container">
    <div class="logo">
      <img @click="$router.push('/')" class="logo" :src="require('assets/CompSoft Logo/CompsoftLogo.png')" alt="logo"/>
    </div>
    <div class='brand-name'>
      <p>CompSoft <br> Technologies</p>
    </div>
    <div class="links-container">
    </div>
    <div class="logout-btn-container">
      <button class="logout-btn" @click="executeSignOut"></button>
    </div>
  </div>
</template>

<script>
import { Authenticator } from "~/plugins/firebase";
import { signOut } from "firebase/auth";
import Cookie from 'js-cookie';
export default {
  name: "navigationBar",
  methods: {
    async executeSignOut() {
      await signOut(Authenticator).then(() => {
        Cookie.remove('AccessToken');
        location.href = '/';
      }).catch(e => {
        console.log('Something went wrong!', e.message);
      });
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.logo{
  float: left;
  width: 50px;
  height: auto;
  cursor: pointer;
}

.logo{
  float: left;
  width: 50px;
  height: auto;
  cursor: pointer;
  margin-top: 7px;
  margin-left: 20px;
}

.user-img-container{
  position: relative;
  width: 50px;
  height: 50px;
  margin:  15px auto 20px;
  border-radius: 50%;
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15);
}
.brand-name{
  height: auto;
  margin-top: 20px;
  color: #AAABB8;
  font-weight: normal;
  margin-left: 25px;
}
.user-img img{
  vertical-align: top;
  display: inline-block;
  width: 40px;
  height: 40px;
  object-fit: cover;
  top: 5px;
  left: 5px;
  border-radius: 50%;
  position: absolute;
}
.main-container{
  width: 90%;
  display: flex;
  margin: auto auto 50px;
}
.logo-container{
  float: left;
  width: 150px;
  height: auto;
  cursor: pointer;
}
.links-container{
  width: 50%;
  margin-left: 70px;
}
.nav-items{
  padding-top: 30px;
  list-style: none;
  align-items: center;
}

.nav-items a{
  margin-right: 10px;
}
.nav-item{
  display: inline;
  color : #4CC3FF;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
}
.links-container a{
  font-weight: bold;
  color: aquamarine;
  text-decoration: none;
  padding: 10px;
}
.search-area{
  display: inline;
  margin-left: 10px;
  padding-top: 25px;
  padding-left: 10px;
  width: 300px;
}
input[type=text]{
  width: 90%;
  border-radius: 5px;
  border: 1px solid #0c0c0e;
  background-color: #202226;
  box-sizing: border-box;
  outline: none;
  color: white;
  font-weight: bold;
  padding: 8px 12px;
}
.image-container{
  padding-right: 10px;
  margin-right: 10px;
  margin-left: 150px;
}
.settings-btn-container{
  width: 50px;
  padding: 10px;
  margin-top: 10px;
}
.settings-btn{
  height: 42px;
  width: 42px;
  -webkit-appearance: none;
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15);
  border-radius: 50%;
  border: 1px solid #2b3134;
  outline: none;
  display: flex;
  background: #2b3134;
  align-items: center;
  justify-content: center;
}
.settings-btn:after{
  font-family: FontAwesome,serif;
  content: '\f013 ';
  font-size: 20px;
  color: #6F7278;
}
.settings-btn:active{
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15),
  inset -5px -5px 10px rgba(113, 113, 113, 0.15), inset 5px 5px 10px rgba(22, 20, 20, 0.15);
}
.settings-btn:active:after{
  color: #15e38a;
}

.logout-btn-container{
  width: 50px;
  padding: 10px;
  margin-right: 20px;
  margin-top: 10px;
  margin-left: 270px;

}

.logout-btn{
  height: 42px;
  width: 42px;
  -webkit-appearance: none;
  border-radius: 50%;
  outline: none;
  display: flex;
  border: none;
  background-color: #25274D;
  align-items: center;
  justify-content: center;
}
.logout-btn:after{
  font-family: FontAwesome, serif;
  content: '\f011 ';
  font-size: 20px;
  color: #6F7278;
}
.logout-btn:active{
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15),
  inset -5px -5px 10px rgba(113, 113, 113, 0.15), inset 5px 5px 10px rgba(22, 20, 20, 0.15);
}
.logout-btn:active:after{
  color: #4CC3FF;
}
</style>
