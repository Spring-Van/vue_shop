// 按需引入
import Vue from 'vue'
import dayjs from 'dayjs'
// 按需引入elementui
import './element'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles 导入富文本编辑器的样式文件
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 将富文本编辑器注册为全局可用组件
Vue.use(VueQuillEditor)

// 将dayjs挂载到全局
Vue.prototype.$dayjs = dayjs
