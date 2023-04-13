import request from '@/utils/request.js'

// 商品分类数据列表
export function categoriesListApi (params) {
  return request({
    url: 'categories',
    method: 'get',
    params
  })
}

// 添加商品分类
export function categoriesAddApi (data) {
  return request({
    url: 'categories',
    method: 'post',
    data
  })
}

// 商品分类详情
export function categoriesDetailApi (id) {
  return request({
    url: `categories/${id}`,
    method: 'get'
  })
}

// 编辑商品分类
export function categoriesEditApi (data) {
  return request({
    url: `categories/${data.cat_id}`,
    method: 'put',
    data
  })
}

// 删除商品分类
export function categoriesDelApi (id) {
  return request({
    url: `categories/${id}`,
    method: 'delete'
  })
}

// 分类参数列表
export function categoriesAttrListApi (id) {
  return request({
    url: `categories/${id}/attributes`,
    method: 'get'
  })
}

// 添加分类参数
export function categoriesAttrAddApi (data) {
  return request({
    url: `categories/${data.id}/attributes`,
    method: 'post',
    data
  })
}

// 删除分类参数
export function categoriesAttrDelApi (data) {
  return request({
    url: `categories/${data.id}/attributes/${data.attrid}`,
    method: 'delete'
  })
}

// 分类参数详情
export function categoriesAttrDetailApi (data) {
  return request({
    url: `categories/${data.id}/attributes/${data.attrid}`,
    method: 'get'
  })
}

// 编辑分类参数
export function categoriesAttrEditApi (data) {
  return request({
    url: `categories/${data.id}/attributes/${data.attrid}`,
    method: 'put',
    data
  })
}

// 商品列表
export function goodsListApi () {
  return request({
    url: 'goods',
    method: 'get'
  })
}

// 添加商品
export function goodsAddApi (data) {
  return request({
    url: 'goods',
    method: 'post',
    data
  })
}

// 商品详情
export function goodsDetailApi (id) {
  return request({
    url: `goods/${id}`,
    method: 'get'
  })
}

// 编辑商品
export function goodsEditApi (data) {
  return request({
    url: `goods/${data.id}`,
    method: 'put',
    data
  })
}

// 删除商品
export function goodsDelApi (id) {
  return request({
    url: `goods/${id}`,
    method: 'delete'
  })
}
