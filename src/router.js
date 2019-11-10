import Router from "vue-router"
import Vue from 'vue'
import App from './App.vue'
import admin from "./Admin"
import shop from "./Shop"
import index from "./shop/Index"
import recommend from "./shop/Recommend"
import search from "./shop/Search"
import chart from "./shop/Chart"
import geren from "./shop/Geren"
import category from "@/components/admin/Category"
import product from "@/components/admin/Product"
import news from "@/components/admin/News"
import video from "@/components/admin/Video"
import adminlogin from "@/components/admin/Login"
Vue.use(Router);
var router = new Router({
	routes: [{
			path: "/",
			redirect: '/index',
			name: "shop",
			components: {
				default: shop
			},
			children: [{
					path: "index",
					component: index,
				},
				{
					path: "recommend",
					component: recommend,
				},
				{
					path: "chart",
					component: chart,
				},
				{
					path: "search",
					component: search,
				},
				{
					path: "geren",
					component: geren,
				}
			]
		},
		{
			path: "/admin",
			name: "admin",
			component: admin,
			children:[
				{
					path: "1-1",
					component: category,
				},
				{
					path: "2-1",
					component: product,
				},
				{
					path: "3-1",
					component: news,
				},
				{
					path: "4-1",
					component: video,
				}
			]
		},
		{
				path: "/adminlogin",
				name: "adminlogin",
				component:adminlogin
		}
	]
});
export default router;
