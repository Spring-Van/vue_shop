<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">
          <span>|||</span>
        </div>
        <!-- collapse ：是否折叠菜单；collapse-transition：是否开启折叠动画 -->
        <el-menu
          background-color="#323744"
          text-color="#fff"
          active-text-color="#3699FB"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activeMenu"
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <!-- <i :class="iconsObj[item.id]"></i> -->
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="'/' + subItem.path + ''"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="getActiveMenu('/' + subItem.path + '')"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu></el-aside
      >
      <!-- 右侧主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menusListApi } from '@/api/layout'
export default {
  name: 'Home',
  data () {
    return {
      // 左侧菜单数据
      menuList: null,
      // 左侧一级菜单图标数组：键=菜单id，值=图标名称
      // iconsObj: {
      //   '125': 'iconfont icon-user',
      //   '103': 'iconfont icon-tijikongjian',
      //   '101': 'iconfont icon-shangpin',
      //   '102': 'iconfont icon-danju',
      //   '145': 'iconfont icon-baobiao'
      // },
      // 是否折叠左侧菜单
      isCollapse: false,
      // 当前激活的menu菜单项
      activeMenu: ''
    }
  },
  created () {
    this.getMenuList()
    // this.activeMenu = window.sessionStorage.getItem('activeMenu')
  },
  methods: {
    logout () {
      // 清空sessionStorage中的token
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList () {
      // 发起左侧菜单请求
      const { data: res } = await menusListApi()
      if (res.meta.status !== 200) return this.$message.error(res.mate.msg)
      this.menuList = res.data
    },
    // 点击折叠按钮触发
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    getActiveMenu (activeMenu) {
      window.sessionStorage.setItem('activeMenu', activeMenu)
      this.activeMenu = activeMenu
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373c41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 25px;
        height: 25px;
      }
    }
    span {
      flex: 1;
      font-size: 18px;
    }
  }
}

.el-aside {
  background-color: #323744;
}

.el-main {
  background-color: #eaedf2;
}
</style>
