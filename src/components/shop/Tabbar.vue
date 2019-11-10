<template>
	<ul class="tabbar">
		<li v-for="(bar,index) in bars" :class="selected==index?'selected':''" @click="selected=index">
			<router-link :to="bar.to"><img class="bars" :src="bar.path" />{{bar.title}}</router-link>
		</li>
	</ul>
</template>

<script>
	var imgs;
	export default {
		name: "tabbar",
		data: function() {
			return {
				selected: -1,
				bars: [{
						path: require("@/assets/tabbar/fang1.svg"),
						pathed: require("@/assets/tabbar/fang2.svg"),
						to: "/index",
						title: "首页"
					},
					{
						path: require("@/assets/tabbar/tui1.svg"),
						pathed: require("@/assets/tabbar/tui2.svg"),
						to: "/recommend",
						title: "推荐"
					}, {
						path: require("@/assets/tabbar/sou1.svg"),
						to: "/search",
						pathed: require("@/assets/tabbar/sou2.svg"),
						title: "搜索"
					},
					{
						path: require("@/assets/tabbar/liao1.svg"),
						pathed: require("@/assets/tabbar/liao2.svg"),
						to: "/chart",
						title: "聊天"
					},
					{
						path: require("@/assets/tabbar/ge1.svg"),
						pathed: require("@/assets/tabbar/ge2.svg"),
						to: "/geren",
						title: "个人中心"
					}

				]
			}
		},
		watch: {
			selected: function(newIndex, oldIndex) {
				var img = imgs[newIndex];
				var oldImg = imgs[oldIndex];
				switch (newIndex) {
					case 0:
						img.src = require("@/assets/tabbar/fang2.svg");
						break;
					case 1:
						img.src = require("@/assets/tabbar/tui2.svg");
						break;
					case 2:
						img.src = require("@/assets/tabbar/sou2.svg");
						break;
					case 3:
						img.src = require("@/assets/tabbar/liao2.svg");
						break;
					case 4:
						img.src = require("@/assets/tabbar/ge2.svg");
						break;
				}
				switch (oldIndex) {
					case 0:
						oldImg.src = require("@/assets/tabbar/fang1.svg");
						break;
					case 1:
						oldImg.src = require("@/assets/tabbar/tui1.svg");
						break;
					case 2:
						oldImg.src = require("@/assets/tabbar/sou1.svg");
						break;
					case 3:
						oldImg.src = require("@/assets/tabbar/liao1.svg");
						break;
					case 4:
						oldImg.src = require("@/assets/tabbar/ge1.svg");
						break;
				}
			}
		},
		created: function() {
			this.selected = 0;
		},
		mounted: function() {
			imgs = document.getElementsByClassName("bars");
		}
	}
</script>

<style scoped>
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 5rem;
		background: white;
		font-size: 1.1rem;

	}

	.tabbar li {
		width: 20%;
		height: 100%;
		float: left;
	}

	.tabbar li a {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: rgb(79, 79, 79);
	}

	.tabbar li img {
		width: 2.5rem;
		height: 2.5rem;
	}

	.tabbar li.selected a {
		color: rgb(224, 46, 36);
	}
</style>
