import request from '@/utils/request.js'

// 权限列表
export function rightsListApi (type) {
  return request({
    url: `rights/${type}`,
    method: 'get'
  })
}
