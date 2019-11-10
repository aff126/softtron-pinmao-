<template>
	<el-dialog :before-close="handleClose" :modal="modal" title="视频管理" :visible.sync="dialogFormVisible">
		<el-form :model="product">
			<el-form-item label="视频Id">
				<el-input :disabled="true" v-model="video.videoId"  autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="视频标题">
				<el-input v-model="video.title"  autocomplete="off"></el-input>
			</el-form-item>
				<el-form-item label="视频路径">
				<el-input v-model="video.url"  autocomplete="off"></el-input>
			</el-form-item>
			
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="$emit('closeDialog',false)">取 消</el-button>
			<el-button type="primary" @click="$emit('sumitDialog',{video:video,ifClose:false})">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: "videodialog",
		props: ["dialogFormVisible","video"],
		data: function() {
			return {
                 modal:false
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
