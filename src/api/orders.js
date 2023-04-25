import request from '@/utils/request.js'

// 订单数据列表
export function ordersListApi (params) {
  return request({
    url: 'orders',
    method: 'get',
    params
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
  // return request({
  //   url: `/kuaidi/${id}`,
  //   method: 'get'
  // })
  let res = {
    data: [
      {
        time: '2018-05-10 09:39:00',
        ftime: '2018-05-10 09:39:00',
        context: '已签收,感谢使用顺丰,期待再次为您服务',
        location: ''
      },
      {
        time: '2018-05-10 08:23:00',
        ftime: '2018-05-10 08:23:00',
        context: '[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件',
        location: ''
      },
      {
        time: '2018-05-10 07:32:00',
        ftime: '2018-05-10 07:32:00',
        context: '快件到达 [北京海淀育新小区营业点]',
        location: ''
      },
      {
        time: '2018-05-10 02:03:00',
        ftime: '2018-05-10 02:03:00',
        context: '快件在[北京顺义集散中心]已装车,准备发往 [北京海淀育新小区营业点]',
        location: ''
      },
      {
        time: '2018-05-09 23:05:00',
        ftime: '2018-05-09 23:05:00',
        context: '快件到达 [北京顺义集散中心]',
        location: ''
      },
      {
        time: '2018-05-09 21:21:00',
        ftime: '2018-05-09 21:21:00',
        context: '快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]',
        location: ''
      },
      {
        time: '2018-05-09 13:07:00',
        ftime: '2018-05-09 13:07:00',
        context: '顺丰速运 已收取快件',
        location: ''
      },
      {
        time: '2018-05-09 12:25:03',
        ftime: '2018-05-09 12:25:03',
        context: '卖家发货',
        location: ''
      },
      {
        time: '2018-05-09 12:22:24',
        ftime: '2018-05-09 12:22:24',
        context: '您的订单将由HLA（北京海淀区清河中街店）门店安排发货。',
        location: ''
      },
      {
        time: '2018-05-08 21:36:04',
        ftime: '2018-05-08 21:36:04',
        context: '商品已经下单',
        location: ''
      }
    ],
    meta: { status: 200, message: '获取物流信息成功！' }
  }
  return new Promise((resolve, reject) => {
    if (id) {
      resolve(res)
    }
  })
}
