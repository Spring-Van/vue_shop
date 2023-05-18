// vue.config.js
const path = require('path')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // 判断是否是生产环境
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  publicPath:
  process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/', // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || 'dist', // 输出文件目录 默认 dist
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: true, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: (config) => {
    // 生产环境默认打包入口
    config.when(process.env.NODE_ENV === 'production', config => {
      // 1.增加一个入口 app 2.清理所有默认入口配置 3.增加一个配置文件
      config.entry('app').clear().add('./src/main-prod.js')
      config.set('externals', {
        vue: 'vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        echarts: 'echarts',
        nprogress: 'Nprogress',
        'vue-quill_editor': 'VueQuillEditor'
      })
    })
    // 开发环境默认打包入口
    config.when(process.env.NODE_ENV === 'development', config => {
      // 1.增加一个入口 app 2.清理所有默认入口配置 3.增加一个配置文件
      config.entry('app').clear().add('./src/main-dev.js')
    })
    config.resolve.symlinks(true) // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap((args) => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = 'none'
      return args
    })
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))
  },
  css: {
    extract: IS_PROD, // 是否使用css分离插件 ExtractTextPlugin
    requireModuleExtension: true, // 为所有的 CSS 及其预处理文件开启 CSS Modules。这个选项不会影响 `*.vue` 文件。
    // css预设器配置项
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // `globalVars` 定义全局对象，可加入全局变量
        globalVars: {
          primary: '#333'
        }
      }
    }
  },
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: 'localhost', // 自定义域名
    port: 8888, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理 单个示例
    proxy: {
      // 配置多个跨域 多个示例
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false
        // pathRewrite: {
        //   '^/api': '/'
        // }
      }
      // '/api2': {
      //   target: 'http://172.12.12.12:2018',
      //   changeOrigin: true,
      //   // ws: true,//websocket支持
      //   secure: false,
      //   pathRewrite: {
      //     '^/api2': '/'
      //   }
      // }
    }
  }
}
