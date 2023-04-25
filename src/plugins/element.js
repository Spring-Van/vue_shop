// 按需引入
import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  InputNumber,
  Message,
  Container,
  Header,
  Main,
  Aside,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Steps,
  Step,
  CheckboxGroup,
  Checkbox,
  Upload
} from 'element-ui'

/*
*  从elemnet-ui2.6（包括2.6版本的）以后的版本中，
*  element-ui才开始有这个组件的，
*  在之前的elemnet-ui版中，没有这个组件,需下载后手动引入
*/
import TimeLine from './timeline/index.js'
import TimeLineItem from './timeline-item/index.js'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(TimeLine)
Vue.use(TimeLineItem)
// 定义一个原型对象的属性$message 来接收导入的消息对象Message
Vue.prototype.$message = Message

// MessageBox引入方式比较特殊，不用使用Vue.use()导入
Vue.prototype.$confirm = MessageBox.confirm
