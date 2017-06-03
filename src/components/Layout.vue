<template>
	<div>
		<div class="header">
			<div class="header_inner">
				<h1 class="header_logo">
        <router-link :to="{path:'/'}">
					<img src="../assets/logo.png">
        </router-link>
				</h1>
				<ul class="navList">
					<li @click="diaShow('logShow')" v-if="!username">登录</li>
          <li v-if="username">{{username}}</li>
					<li>｜</li>
					<li @click="diaShow('registerShow')" v-if="!username">注册</li>
          <li v-if="username">退出</li>
					<li>｜</li>
					<li @click="diaShow('aboutShow')">关于</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<div class="container">
				<router-view></router-view>
			</div>
		</div>
		<div class="footer">
			This is a footer
		</div>
    <my-dialog :is-show="aboutShow" @on-close="diaClose('aboutShow')">
      <span slot="title">关于我们111</span>
      <p>关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们111</p>
    </my-dialog>
    <my-dialog :is-show="logShow" @on-close="diaClose('logShow')">
      <span slot="title">登录</span>
      <log @on-success="successHandler" @on-close="diaClose('logShow')">
        
      </log>
    </my-dialog>
    <my-dialog :is-show="registerShow" @on-close="diaClose('registerShow')">
      <span slot="title">注册</span>
      <register>
        
      </register>
    </my-dialog> 
	</div>
</template>
<script>
import MyDialog from './base/dialog'
import Log from './Log'
import Register from './register'
export default{
  components:{
    log:Log,
    register:Register,
    myDialog:MyDialog
  },
	data(){
		return{
      aboutShow:false,
      logShow:false,
      registerShow:false,
      username:''
		}
	},
  methods:{
    diaShow(attr){
      this[attr] = true;
    },
    diaClose(attr){
      this[attr] = false;
    },
    successHandler(data){
      this.username = data.data.username;
      this.diaClose('logShow')
    }
  }
}
</script>
<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
  box-sizing: border-box;
}
.header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.header_inner {
  width: 1200px;
  margin: 0 auto;
}
.header_logo {
  float: left;
}
.header_logo img {
  width: 50px;
  margin-top: 20px;
}
.navList {
  float: right;
}
.navList li {
  cursor: pointer;
  float: left;
}
.footer{
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
  background-color: #eee;
}

</style>