import Vue from 'vue'
// import { Form, Tree, Upload } from 'element-ui'
// Vue.component(Form.name, Form)
// Vue.component(Tree.name, Tree)
// Vue.component(Upload.name, Upload)
// https://stackoverflow.com/questions/52104217/vuejs-webpack-lazyload-modules-from-elementui
Vue.component('ElForm', () => import(/* webpackChunkName: "ElForm" */ 'element-ui/lib/form'))
Vue.component('ElTree', () => import(/* webpackChunkName: "ElTree" */ 'element-ui/lib/tree'))