<template>
	<div>
	<router-view></router-view>
	<div class="bottomarea"></div>
	<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from "./components/shop/Tabbar"
	
	export default {
		name: 'shop',
		components:{tabbar},
		beforeCreate:function(){
			// this.$router.push('index');
		}
	}
</script>

<style scoped>
	.banner{
		margin-top: 4.3rem;
	}
	.bottomarea{
		height:5rem;
	}
</style>
