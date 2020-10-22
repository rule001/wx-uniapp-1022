import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//公共js
import PubFuc from './common/js/util.js'
Vue.prototype.$pubFuc=PubFuc

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
