<template>
  <div>
    <el-card>
      <el-table :data="rightsList" border stripe  height="500">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="authName" label="权限名称"></el-table-column>
        <el-table-column prop="path" label="路径"></el-table-column>
        <el-table-column prop="level" label="权限等级">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'">一级权限</el-tag>
            <el-tag type="success" v-if="scope.row.level === '1'">二级权限</el-tag>
            <el-tag type="warning" v-if="scope.row.level === '2'">三级权限</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { rightsListApi } from '@/api/rights'
export default {
  data () {
    return {
      // 创建一个权限列表对象
      rightsList: []
    }
  },

  // 在生命周期函数 create中请求数据
  created () {
    this.getRightsList()
  },

  methods: {
    // 获取权限列表数据
    async getRightsList () {
      // const { data: res } = await this.$http.get('rights/list')
      const { data: res } = await rightsListApi('list')
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限列表失败！')
      }
      this.rightsList = res.data
    }
  }
}
</script>

<style lang="less" scoped>
// 滚动条的宽度
  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 8px; // 横向滚动条
    height: 8px; // 纵向滚动条 必写
  }
  // 滚动条的滑块
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
</style>
