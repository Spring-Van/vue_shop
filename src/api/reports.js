import request from '@/utils/request.js'

// 基于时间统计的折线图
export function timeReportApi (type) {
  return request({
    url: 'reports/type/1',
    method: 'get'
  })
}
