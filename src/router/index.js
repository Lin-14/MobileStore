import Vue from 'vue'
import Router from 'vue-router'
/*import Home from 'pages/home';
import Category from 'pages/category';
import Cart from 'pages/cart';
import Personal from 'pages/personal';
import Search from 'pages/search';
import Product from 'pages/product';*/

Vue.use(Router)
const routes = [
	{
		name: 'home',
		path: '/home',
		component: () => import('pages/home'),//动态引入，用到再加载
		children:[
			{
				name: 'home-product',
				path: 'product/:id',
				component:() => import('pages/Product')
			}
		]
	},
	{
		name: 'category',
		path: '/category',
		component: () => import('pages/Category')
	},
	{
		name: 'cart',
		path: '/cart',
		component: () => import('pages/Cart')
	},
	{
		name: 'personal',
		path: '/personal',
		component: () => import('pages/Personal')
	},
	{
		name: 'search',
		path: '/search',
		component: () => import('pages/Search')
	},
	{
		path: "*",
		redirect: '/home' //重定向
	}
]
export default new Router({
  routes
})
