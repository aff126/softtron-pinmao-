<template>
	<div class="root">
		<div class="info">
			<img :src="header"/>
			<span>world</span>
		</div>
		<div class="order">
			<span class="title">我的订单</span>
			<ul class="orderinfo">
				<li v-for="order in orderinfo"><img :src="order.img" /><span>{{order.title}}</span></li>
			</ul>
		</div>
		<div class="title">精品推荐</div>
		<recommend></recommend>
	</div>
</template>

<script>
	import recommend from "@/shop/Recommend"
	export default {
		name:"geren",
		data:function(){
			return {header:require("@/assets/header.jpg"),
			orderinfo:[
				{img:require("@/assets/pay.png"),
				title:"待付款"
				},
				{img:require("@/assets/pay.png"),
				title:"待付款"
				},
				{img:require("@/assets/pay.png"),
				title:"待付款"
				},
				{img:require("@/assets/pay.png"),
				title:"待付款"
				}
			]
			}
		},components:{
			recommend
		}
	}
</script>

<style scoped>
	.root{
			
	}
	.info{
		padding:0 1.7rem;
		height:6.5rem;
		display: flex;
	    margin-top: 1.5rem;
		font-size: 1.5rem;
	}
	.info img{
		height:6.5rem;
		width:6.5rem;
		border-radius: 3rem;
		margin-right: 1.4rem;
	}
	.order{
		margin-top: 1.1rem;
	}
	.order .title{
		font-size: 1.8rem;
		padding:0 1.7rem;
		color: #000000;
	}
	.orderinfo{
		margin-top:2.6rem;
		display: flex;
	}
	.orderinfo li{
		width:25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.orderinfo li span{
		margin-top: 1.2rem;
		font-size: 1.4rem;
	}
	.title{
		color: red;
		text-align: center;
		font-size: 1.6rem;
		margin-top:0.8rem;
		background: white;
		padding:1.4rem 0;
	}
</style>
