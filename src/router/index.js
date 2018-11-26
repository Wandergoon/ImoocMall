import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
// import Title from '@/views/Title'
// import Image from '@/views/Image'
// import Cart from '@/views/Cart'



Vue.use(Router)

export default new Router({
    // 指定路由模式
    mode: 'history',
    // mode: 'hash',    
    routes: [{
            //动态路由
            // path: '/goods/:goodsId/user/:name',
            // path: '/goods',
            path: '/',
            name: 'GoodsList',
            component: GoodsList,

            //切换成为组件形式
            // components: {
            //就是根据name加载不同的组件
            // default: GoodsList,
            // title: Title,
            // img: Image
            // }
            // children: [{
            //         path: 'title',
            //         name: 'title',
            //         component: Title
            //     },
            //     {
            //         path: 'img',
            //         name: 'img',
            //         component: Image
            //     }
            // ]

        },

        // {
        //     path: '/cart/:cartId',
        //     name: 'cart',
        //     component: Cart
        // }
    ]
})