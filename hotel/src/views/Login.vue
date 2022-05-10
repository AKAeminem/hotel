<template>
  <div>
    <el-form :rules="rules" ref="form" :model="form" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item prop="name" label="账号">
        <el-input
          type="text"
          placeholder="请输入用户名"
          v-model="form.name"
        ></el-input
      ></el-form-item>

      <el-form-item prop="password" label="密码">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="center-a" type="primary" @click="submitForm('form')"
          >登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sessionStorage.setItem("isLogin", "ture");

          if (this.form.name == "admin" && this.form.password == "admin") {
            this.$router.push({
              name: "Index",
              params: { name: this.form.name },
            });
          } else {
            this.$message({
              showClose: true,
              message: "请输入正确的用户名和密码",
              type: "error",
            });
          }
        } else {
          this.$message({
            showClose: true,
            message: "请输入用户名和密码",
            type: "warning",
          });
          return false;
        }
      });
    },
  },
};
</script>

<style lang="css" >
.login-box {
  background-color: rgb(214, 231, 240);
  width: 350px;
  margin: 150px auto;
  border: 1px solid #dcdfe6;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 40px #dcdfe6;
}

.center-a {
  margin-left: 135px;
}

.login-title {
  text-align: center;
}
</style>
