<template>
	<el-dialog :before-close="handleClose" title="资讯管理" :visible.sync="dialogFormVisible">
		<el-form :model="product">
			<el-form-item label="新闻Id">
				<el-input :disabled="true" v-model="news.newsId"  autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="新闻标题">
				<el-input v-model="news.newsTitle"  autocomplete="off"></el-input>
			</el-form-item>
			
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="$emit('closeDialog',false)">取 消</el-button>
			<el-button type="primary" @click="$emit('sumitDialog',{news:news,ifClose:false})">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: "newsdialog",
		props: ["dialogFormVisible","news"],
		data: function() {
			return {

			}
		},
		methods: {
			handleClose: function() {
				this.$emit('closeDialog',false);
			}
		}
	}
</script>

<style>
</style>
