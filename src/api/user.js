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
