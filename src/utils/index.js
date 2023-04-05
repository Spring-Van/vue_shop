
/**
 * 显示层级数据
 * @param tree {Array} 树数据
 * @param func {Function} 回调函数
 * @param field {String} 字段名称
 * @param path {Array} 路径数据
 * @returns {*[]|[]|*}
 */
export const treeFindPath = (tree, func, field = '', path = []) => {
  if (!tree) return []
  for (const data of tree) {
    field === '' ? path.push(data) : path.push(data[field])
    if (func(data)) return path
    if (data.children) {
      const findChildren = treeFindPath(data.children, func, field, path)
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}
