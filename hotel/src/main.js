// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import Vuex from "vuex";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";



Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;



router.beforeEach((to, from, next) => {
	let isLogin = sessionStorage.getItem("isLogin");
	if (to.path == "/logout") {
	  sessionStorage.clear();
	  next({ path: "/login" });
	} else if (to.path == "/login") {
	  if (isLogin != null) {
		next({ path: "/index" });
	  }
	} else if (isLogin == null) {
	  next({ path: "/login" });
	}
	next();
  });
  
/* eslint-disable no-new */

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
