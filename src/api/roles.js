import request from '@/utils/request.js'

// 角色列表
export function rolesListApi () {
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

// 删除角色指定权限
export function deleteRoleRights (roleId, rightId) {
  return request({
    url: `roles/${roleId}/rights/${rightId}`,
    method: 'delete'
  })
}

// 新增角色
export function addRole (data) {
  return request({
    url: 'roles',
    method: 'post',
    data
  })
}

// 编辑角色
export function setRole (data) {
  return request({
    url: `roles/${data.roleId}`,
    method: 'put',
    data
  })
}

// 删除角色
export function deleteRole (roleId) {
  return request({
    url: `roles/${roleId}`,
    method: 'delete'
  })
}

// 根据 角色ID 查询 详情
export function getRoleDetail (roleId) {
  return request({
    url: `roles/${roleId}`,
    method: 'get'
  })
}

// 角色授权
export function setRoleRights (roleId, data) {
  return request({
    url: `roles/${roleId}/rights`,
    method: 'post',
    data
  })
}
