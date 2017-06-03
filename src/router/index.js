import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import PageIndex from '@/pages/IndexPage'
import Detail from '@/pages/Detail'
import OrderList from '@/pages/OrderList'
import Forecast from '@/pages/detail/forecast'
import Publish from '@/pages/detail/publish'
import Analysis from '@/pages/detail/analysis'
import Count from '@/pages/detail/count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PageIndex
    },
    {
    	path:'/detail',
    	component:Detail,
    	redirect:'/detail/count',
    	children:[
    		{
    			path:'forecast',
    			component:Forecast
    		},
    		{
    			path:'publish',
    			component:Publish
    		},
    		{
    			path:'analysis',
    			component:Analysis
    		},
    		{
    			path:'count',
    			component:Count
    		}
    	]
    },
    {
      path: '/orderList',
      component: OrderList
    }
  ]
})
