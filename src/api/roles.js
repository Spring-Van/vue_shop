import request from '@/utils/request.js'

// 角色列表
export function RolesListApi () {
  return request({
    url: 'roles',
    method: 'get'
  })
}

// 设置用户角色
export function userInfoSetRole (data) {
  return request({
    url: `users/${data.id}/role`,
    method: 'put',
    data
  })
}
