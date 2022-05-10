import Vue from "vue";
import Router from "vue-router";

import Main from "../views/Main.vue";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import Statistical_report from "../views/Member/Statistical_report.vue";
import Room_state from "../views//Member/Room_state.vue";
import Room_reservation from "../views/Member/Room_reservation.vue";
import Check_out from "../views/Member/Check_out.vue";
import Team_bil from "../views/Member/Team_bil.vue";
import Individual_bil from "../views/Member/Individual_bil.vue";

import Notfound from "../views/erro.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      //登录页
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      //首页2
      path: "/index",
      name: "Index",
      component: Index,
      children: [
        {
          // 房态列表
          path: "/fuct1",
          name: "Room_state",
          component: Room_state
        },
        {
          //散客开单
          path: "/fuct2/:rn",
          name: "Individual_bil",
          component: Individual_bil,
          props: true
        },
        {
          //团队开单
          path: "/fuct3",
          name: "Team_bil",
          component: Team_bil
        },
        {
          //退房结账
          path: "/fuct4",
          name: "Check_out",
          component: Check_out
        },
        {
          //房间预订
          path: "/fuct5",
          name: "Room_reservation",
          component: Room_reservation
        },
        {
          //房间预订
          path: "/fuct0",
          name: "Statistical_report",
          component: Statistical_report
        }
      ]
    },
	{
		//组件重定向
		path: "/main",
		name: "Main",
		component: Main,

	  },
    {
      //组件重定向
      path: "/goMain",
      redirect: "/index"
    },
    {
      path: "*",
      component: Notfound
    }
  ]
});
