import request from '@/utils/request.js'

// 用户数据列表
export function usersListApi (params) {
  return request({
    url: 'users',
    method: 'get',
    params
  })
}

// 修改用户状态
export function updateUserStateApi ({ uId, type }) {
  return request({
    url: `users/${uId}/state/${type}`,
    method: 'put'
  })
}

// 用户数据列表
export function addUserInfoApi (data) {
  return request({
    url: 'users',
    method: 'post',
    data
  })
}

// 获取用户详情(编辑)
export function userInfoDetailApi (id) {
  return request({
    url: `users/${id}`,
    method: 'get'
  })
}

// 编辑用户提交
export function userInfoUpdateApi (data) {
  return request({
    url: `users/${data.id}`,
    method: 'put',
    data
  })
}

// 单个用户删除
export function userInfoDeleteApi (id) {
  return request({
    url: `users/${id}`,
    method: 'delete'
  })
}
