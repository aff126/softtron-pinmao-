<template>
	<ul class="activity">
		<li v-for="activity in activities">
			<img :src="activity.path"/>
			<span>{{activity.title}}</span>
		</li>
	</ul>
</template>

<script>
	export default{
		name:"activity",
		data:function(){
			return {activities:[
				{path:require("@/assets/activity/1_03.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_05.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_08.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_11.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_14.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_22.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_25.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_28.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_31.png"),title:"限时秒杀"},
				{path:require("@/assets/activity/1_34.png"),title:"限时秒杀"},
			]}
		}
	}
</script>

<style scoped>
	.activity{
		display: flex;
		flex-wrap: wrap;
	}
	.activity li{
		width:20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
	}
	.activity li span{
		margin-top: 5px;
	}
</style>
