import request from '@/utils/request.js'

// 订单数据列表
export function ordersListApi (type) {
  return request({
    url: 'orders',
    method: 'get'
  })
}

// 修改订单状态
export function updateOrdersApi (data) {
  return request({
    url: `orders/${data.id}`,
    method: 'put',
    data
  })
}

// 查看订单详情
export function orderDetailApi (id) {
  return request({
    url: `orders/${id}`,
    method: 'get'
  })
}

// 查看物流信息
export function lookPhysicalApi (id) {
  return request({
    url: `kuaidi/${id}`,
    method: 'get'
  })
}
