// 入口文件
import Vue from "vue"
import 'bootstrap/dist/css/bootstrap.css'
import app from "./App.vue"
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
var vm = new Vue({
    el:"#app",
    data:{
        selected:''
    },
    render:c=>c(app)
})