<template>
    <div>
     <!-- 此处的HEADER组件删掉
      -->
      <nav-header></nav-header>
      <!-- 此处是面包屑结构 -->
      <nav-bread>
        <!-- 公共插槽,自己定义即可 -->
         <span>Goods</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="priceChecked=all">All</a></dd>
                <dd v-for="(price,index) in priceFilter" >
                  <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
                <!-- <dd>
                  <a href="javascript:void(0)">100 - 500</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">500 - 1000</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">1000 - 2000</a>
                </dd> -->
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item,index) in goodsList">
                    <div class="pic">
                      <!-- <a href="#"><img v-bind:src="'/static/'+item.productImg" alt=""></a> -->
                      <a href="#"><img v-lazy="'/static/'+item.productImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <!-- <li>
                    <div class="pic">
                      <a href="#"><img src="/static/2.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">1000</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btnm">加入购物车</a>
                      </div>
                    </div>
                  </li> -->
                  <!-- <li>
                    <div class="pic">
                      <a href="#"><img src="/static/3.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">500</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li> -->
                    <!-- <div class="pic">
                      <a href="#"><img src="/static/4.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">2499</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 这里是隐藏的价格侧边栏 -->
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
     <!-- 此处是footer组件 -->
     <nav-footer></nav-footer>
    </div>
</template>
<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import './../assets/css/login.css'
import './../assets/css/checkout.css'
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import NavBread from '@/components/NavBread.vue'
import axios from 'axios'//默认去node_modules里面去遍历,不需要特别写出路径
    export default{
        data(){
          //data必须是一个函数,因为vue要求组件之间是不能进行消息共享的
            return {
             goodsList: [],
             priceFilter:[
               {
                 startPrice: '0.00',
                 endPrice: '500.00'
               },
               {
                 startPrice: '500.00',
                 endPrice: '1000.00'
               },
               {
                 startPrice: '1000.00',
                 endPrice: '2000.00'
               },

             ] ,
             priceChecked:    'all',
             filterBy: false,
             overLayFlag: false
            }
            
        },
        components:{
            //这个大括号里是key:value格式的,直接写一个,就会解析成key=value 
            NavHeader,
            NavFooter,
            NavBread
        },
        mounted: function(){
          //在mounted里面初始化的时候调用这个函数
         this.getGoodsList();
        },
        methods:{
          getGoodsList(){
            // var _this = this;
            axios.get("/goods").then((result) => {
              
              var res = result.data;
              this.goodsList = res.result;
            })
          },
          //控制价格侧边栏打开
          showFilterPop(){
         this.filterBy = true;
         this.overLayFlag = true
          },
          
          //点击价格实现遮罩层的关闭,需要传入当前点击的价格的index值
          setPriceFilter(index){
          this.priceChecked = index;
          this.closePop()
          },
          //关闭价格侧边栏
          closePop(){
         this.filterBy = false;
         this.overLayFlag = false;
          },
        }
    }
</script>
