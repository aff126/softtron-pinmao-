<template>
	<div>
		<slideMenu></slideMenu>
		<banner></banner>
		<activity></activity>
		<productlist></productlist>
	</div>
</template>

<script>
	import slideMenu from "@/components/shop/SlideMenu"
    import banner from "@/components/shop/Banner"
	import activity from "@/components/shop/Activity"
	import productlist from "@/components/shop/ShopList"
	export default {
		name: 'index',
		components:{slideMenu,banner,activity,productlist}
	}
</script>

<style scoped>
	.banner{
		margin-top: 4.3rem;
	}
</style>
