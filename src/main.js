import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router.js"
// import VueTouch from 'vue-touch'
import urls from "./interface.js"
import http from "./utils/Axios.js"
import Vuex from "vuex"

// Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(ElementUI);
Vue.prototype.$urls = urls;
Vue.prototype.$http = http;
Vue.config.productionTip = false
import { Message } from 'element-ui';
import Editor from 'wangeditor';
import Notice from "./utils/Notice.js" //通知
Vue.prototype.$message = Message;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Editor = Editor;
Vue.prototype.$Token = "";
Vue.prototype.$Username = "";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        username: ""
    }
})
Vue.prototype.$store = store;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')