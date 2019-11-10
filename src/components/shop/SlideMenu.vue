<template>
	<div class="content">
		<ul class="content-ul">
			<li v-for="menu in menus">{{menu.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "slidemenu",
		data: () => {
			return {
				menus: [{
						title: "热门"
					}, {
						title: "热门"
					},
					{
						title: "热门"
					},
					{
						title: "热门"
					},
					{
						title: "热门"
					},
					{
						title: "热门"
					},
					{
						title: "热门"
					},
					{
						title: "热门"
					},
					{
						title: "热门"
					},
					{
						title: "热门"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.content {
		height: 4.3rem;
		line-height: 4.3rem;
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 2;
		background: white;
	}
	.content-ul{
		overflow-x: scroll;
		width:100%;
		white-space: nowrap;
	}
	.content-ul li{
	
		display: inline-block;
		margin-right: 2.5rem;
		font-size: 1.7rem;
	}
	.content-ul li:first-child{
		margin-left: 1.4rem;
		border-bottom: 2px solid red;
	}
</style>
