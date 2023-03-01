<template>
  <div class="login_container">
    <!-- 登录主体边框 -->
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avater_box">
        <img src="@/assets/logo.png" alt="头像logo" />
      </div>
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号"
            prefix-icon="iconfont icon-RectangleCopy"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="iconfont icon-RectangleCopy1"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则对象
      rules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮,重置登录表单
    resetLoginForm () {
      // 前提是先获取ref节点
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      // 表单之前的预验证
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败! ')
        this.$message.success('登录成功')
        // 1. 将登陆成功之后拿到后端返回的token值，保存到客服端也就是临时浏览器sessionStorage中
        //  1.1 项目中出了登录之外的其他api接口，必须在登录之后才能访问
        //  1.2 token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
        const data = res.data.token
        window.sessionStorage.setItem('token', data)
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background:#2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute; // 绝对定位
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); // 在横轴上进行位移-50%,纵轴上位移-50%
  // 语法嵌套
  .avater_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee; // 边框
    border-radius: 50%; // 添加圆角边框
    padding: 10px; // 内边距
    box-shadow: 0 0 10px #ddd; // 添加阴影
    position: absolute; // 绝对定位
    left: 50%;
    transform: translate(-50%, -50%); // 在横轴上进行位移-50%,纵轴上位移-50%
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%; // 添加圆角边框
      background-color: #eee;
    }
  }
}
.btns {
  display: flex; // 弹性布局
  justify-content: flex-end; // 位于容器的结尾
}
.login_form {
  position: absolute; // 绝对定位
  bottom: 0; // 底部对齐
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box; // 将元素限制到宽度里面
}
</style>
