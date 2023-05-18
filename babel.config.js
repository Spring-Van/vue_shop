// 这是项目发布阶段需要用到的 babel 插件
const prodPlugins = []
// 判断当前的编译模式，如果为生产模式，则运用这个插件
if (process.env.NODE_ENV === 'production') prodPlugins.push('transform-remove-console')
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', { modules: false }]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品是的插件数组
    ...prodPlugins
  ]
}
