<template>
  <div>
    <el-container>
      <el-header style="height: 96px">
        <el-row class="el-row1">
          <!-- 回到index界面 -->
          <el-col :span="2"
            ><div class="grid-content bg-purple">
              <i class="el-icon-s-home"></i>

              <router-link to="/goMain">Stan酒店</router-link>
            </div></el-col
          >

          <el-col :span="2" class="row1"
            ><div class="grid-content bg-purple">
              <router-link to="/login">退出系统</router-link>
            </div></el-col
          >

          <el-col :span="2" class="row1"
            ><div class="grid-content bg-purple">
              <!-- {{ $store.getters.getUser.name }} -->
              管理员:{{$route.params.name}}
            </div></el-col
          >
        </el-row>
      </el-header>

      <el-container class="aside">
        <el-aside style="width: 200px" class="aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#d3dce6"
            text-color="#fff"
            active-text-color="rgb(86, 170, 227)"
          >
            <el-row id="function" class="el-row1">
              <i class="el-icon-setting"></i>

              常用功能
            </el-row>

            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">
                <router-link to="/fuct1">房态列表</router-link>
              </span>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="el-icon-s-custom"></i>
              <span slot="title"
                ><router-link
                  :to="{ name: 'Individual_bil', params: { rn: 310 } }"
                >
                  散客开单</router-link
                ></span
              >
            </el-menu-item>

            <el-menu-item index="4">
              <i class="el-icon-user"></i>
              <span slot="title">
                <router-link to="/fuct3">团队开单</router-link>
              </span>
            </el-menu-item>

            <el-menu-item index="5">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">
                <router-link to="/fuct4">退房结账</router-link>
              </span>
            </el-menu-item>

            <el-menu-item index="6">
              <i class="el-icon-phone-outline"></i>
              <span slot="title">
                <router-link to="/fuct5">房间预订</router-link>
              </span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "Index",
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
/* 常用功能id */
#function {
  font-family: Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "微软雅黑", Arial, sans-serif;

  margin: 20px 20px !important;
  line-height: 0px !important;
  font-size: 20px;
}

.row1 {
  margin: 10px 5px;
  /* margin-top: 20px;
  margin-right: 10px; */
  float: right;
  text-align: center;
}

.el-row1 {
  margin: 10px 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col1 {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  /* min-height: 36px; */
}
.bg-purple {
  background: #d3dce6;
}

/*  上边栏 */
.el-header {
  background-color: #d3dce6;
  color: rgb(40, 102, 216);
  border-radius: 0 0 12px 12px;
  margin: 1px 1px;
  /* line-height: 60px; */
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  /* background: linear-gradient(
		180deg,
		rgba(255, 204, 204, 1) 0%,
		rgba(255, 204, 204, 1) 0%,
		rgba(204, 204, 255, 1) 100%,
		rgba(204, 204, 255, 1) 100%
	); */
}
.aside {
  background-color: rgb(244, 241, 241);
}

.el-aside {
  width: 200px;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  margin-top: 8px;
  margin-left: 5px;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 760px;
  /* background: linear-gradient(
		180deg,
		rgba(204, 250, 209, 1) 0%,
		rgba(204, 250, 209, 1) 2%,
		rgba(204, 252, 207, 1) 24%,
		rgba(25, 178, 148, 1) 100%,
		rgba(25, 178, 148, 1) 100%
	); */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin: 10px 10px;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>