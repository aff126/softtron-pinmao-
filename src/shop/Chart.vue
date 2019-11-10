<template>
	<div class="root">
	<ul class="charts">
		<li v-for="chart in charts"><img :src="chart.logo" />
			<div class="chartinfo"><span>{{chart.name}}</span><span>{{chart.message}}</span></div>
			<div class="time"><span>{{chart.time}}</span><i>{{chart.total}}</i></div>
		</li>
	</ul>
	<div class="title">精品推荐</div>
	<recommend></recommend>
	
	</div>
	
</template>

<script>
	import recommend from "@/shop/Recommend"
	export default {
		name: "search",
		data: function() {
			return {
				charts: [{
					logo: require("@/assets/shop/shoplogo_03.png"),
					name: "拼猫商城",
					message: "你的商品已经到货",
					time: "2019-09-01 8:00:00",
					total: 20
				},
				{
					logo: require("@/assets/shop/shoplogo_03.png"),
					name: "拼猫商城",
					message: "你的商品已经到货",
					time: "2019-09-01 8:00:00",
					total: 20
				},
				{
					logo: require("@/assets/shop/shoplogo_03.png"),
					name: "拼猫商城",
					message: "你的商品已经到货",
					time: "2019-09-01 8:00:00",
					total: 20
				},
				{
					logo: require("@/assets/shop/shoplogo_03.png"),
					name: "拼猫商城",
					message: "你的商品已经到货",
					time: "2019-09-01 8:00:00",
					total: 20
				}]
			}
		},components:{recommend}
	}
</script>

<style scoped>
	.charts li {
		display: flex;
		height: 7.2rem;
		align-items: center;
		padding: 0 2rem;
		justify-content: space-between;
		width: calc(100% - 4rem);
		background: white;
	}

	.chartinfo {
		margin-left: 2rem;
	}

	.chartinfo span,
	.time i,
	.time span {
		display: block;
	}

	.chartinfo span:nth-child(1) {
		font-size: 1.8rem;
	}

	.chartinfo span:nth-child(2) {
		font-size: 1.4rem;
		color: rgb(183, 183, 183);
		margin-top: 0.8rem;
	}

	.time {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		color: rgb(183, 183, 183);
		font-size: 1.1rem;
	}

	.time i {
		display: inline-block;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background: red;
		color: white;
		text-align: center;
		line-height: 20px;
		margin-top: 1rem;
	
	}
	.title{
		color: red;
		text-align: center;
		font-size: 1.6rem;
		margin-top:0.8rem;
		background: white;
		padding:1.4rem 0;
	}
	.root{
		background: rgb(244,244,244);
	}
</style>
