<template>
	<ul class="recommend">
        <li v-for="product in products">
			<img :src="product.path"/>
			<span class="name">{{product.name}}</span>
			<span class="saleinfo"><span class="price">¥{{product.price}}</span><span class="total">已拼{{product.saled}}</span></span>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "recommend",
		data:function(){
			return {
				products:[
					{path:require("@/assets/recommend/1.png"),
					name:"非常好用非常好用非常好用",
					price:8.9,
					saled:10000
					},
					{path:require("@/assets/recommend/1.png"),
					name:"非常好用非常好用非常好用",
					price:8.9,
					saled:10000
					},
					{path:require("@/assets/recommend/1.png"),
					name:"非常好用非常好用非常好用",
					price:8.9,
					saled:10000
					},
					{path:require("@/assets/recommend/1.png"),
					name:"非常好用非常好用非常好用",
					price:8.9,
					saled:10000
					}
				]
			}
		}
	}
</script>

<style scoped>
	.recommend{
		overflow: hidden;
	}
	.recommend li{
		width:49%;
		height:29.1rem;
		float: left;
	}
	.recommend li:nth-child(even){
		margin-left: 2%;
	}
	.recommend li span{
		display: block;
	}
	.recommend li img{
		width:100%;
		height:20.7rem;
	}
	.recommend li .name{
		font-size: 1.3rem;
		margin-top: 1rem;
		font-weight: bold;
		padding:0rem 1rem;
	}
	.recommend li .saleinfo{
		margin-top: 3.5rem;
		padding:0rem 1rem;
	}
	.saleinfo .price{
		color: rgb(217,0,0);
		font-size: 1.3rem;
		display: inline-block;
	}
	.saleinfo  .total{
		font-size: 1.1rem;
		color: rgb(210,210,210);
		display: inline-block;
		margin-left: 1rem;
	}
</style>
