<template>
	<div class="root"> 
		<div class="search"><img :src="src"/>搜索你想要的</div>
		<div class="categoryarea">
			<ul class="category">
				<li v-for="(category,index) in categories" :class="selected==index?'selected':''" @click="selected=index" >
					{{category.name}}
				</li>
			</ul>
			<ul class="categorylist">
				<li v-for="category in categorylist"><img :src="category.path"/>{{category.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"chart",
		data:function(){
			return {
				selected:0,
				src:require("@/assets/search.svg"),
				categories:[
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"},
					{name:"百货"}
				],
				categorylist:[
					{path:require("@/assets/category/category1_03.png"),name:"香水香氛"},
					{path:require("@/assets/category/category1_03.png"),name:"香水香氛"},
					{path:require("@/assets/category/category1_03.png"),name:"香水香氛"},
					{path:require("@/assets/category/category1_03.png"),name:"香水香氛"},
					{path:require("@/assets/category/category1_03.png"),name:"香水香氛"},
					{path:require("@/assets/category/category1_03.png"),name:"香水香氛"},
					{path:require("@/assets/category/category1_03.png"),name:"香水香氛"}
				]
			}
		}
	}
</script>

<style scoped>
	ul{
		float: left;
	}
	.search{
		width:39rem;
		height:4rem;
		border-radius: 5px;
		background: rgb(237,237,237);
		margin:0 auto;
		color: rgb(159,159,159);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
	}
	.search img{
		width:1.7rem;
		height:1.7rem;
		
	}
	.category{
		height:calc(11 * 5.4rem);
		width:21%;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.category li{
		width:9.9rem;
		height:5.4rem;
		line-height: 5.4rem;
		background: rgb(248,248,248);
		font-size: 1.6rem;
		text-align: center;
	}
	.category li.selected{
		color: red;
		position: relative;
	}
	.category li.selected:before{
		width:2px;
		height:3.9rem;
		background: red;
		content: "";
		display: inline-block;
		position: absolute;
		top:50%;
		left:0;
		transform: translateY(-50%);
	}
	.categorylist{
		display: flex;
		flex-wrap: wrap;
		width:79%;
	}
	.categorylist li {
		width:calc(100%/3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 3rem;
	}
	.categorylist li img{
		width:3.2rem;
	}
</style>
