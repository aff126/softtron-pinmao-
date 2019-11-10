<template>
	<ul class="productList">
		<li v-for="product in products">
			<img style="width:40%;" :src="product.imgPath" />
			<div class="des">
				<span class="name">{{product.name}}</span>
				<span class="pricearea"><em class="price">¥{{product.price}}</em>已拼{{product.saled}}</span>
			</div>
		</li>
	</ul>
</template>

<script >
	export default {
		name: "productlist",
		data: function() {
			return {
				products:[]
			}
		},
		mounted:function(){
			//获取远程数据
	   this.$axios
      .get(this.$urls.products)
      .then(response => {
		  this.products = response.data
		 })
		}
	}
</script>

<style scoped>
	.productList li{
		margin-top: 10px;
		padding:10px;
		display: flex;
	}
	
	.des{
		float: left;
		width:60%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding:8px 0 0 8px;
		color: rgb(62,62,63);
	}
	.des .name{
		font-size: 1.5rem;
	}
	.des .pricearea{
		font-size: 1.3rem;
	}
	.des .pricearea .price{
		font-size: 1.4rem;
		color: red;
		font-style: normal;
		margin-right: 10px;
	}
</style>
