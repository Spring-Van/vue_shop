import request from '@/utils/request.js'

// 菜单列表
export function menusListApi (params) {
  return request({
    url: 'menus',
    method: 'get'
  })
}
