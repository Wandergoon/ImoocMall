// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
    loading: "/static/loading-svg/loading-bars.svg"
});

/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>' //其实template的底层还是有调用render渲染
            // render: h => h(App) //比较早的时候使用来对APP进行渲染
            // render的第二种写法:
            // render: function(h) {
            //     return h(App);
            // }
    })
    // .$mount('#app') //可以通过这个方法挂载到APP上去