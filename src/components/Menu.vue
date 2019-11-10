<template>
	<div>
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
		 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item>
				<h1>拼猫商城后台管理系统</h1>
			</el-menu-item>
			<el-menu-item index="1">处理中心</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1" @click="drawer = true">图片资源中心</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">商城首页</a></el-menu-item>
			<el-menu-item class="right" @click="quit()">退出</el-menu-item>
			<el-menu-item class="right">欢迎您:{{username}}</el-menu-item>


		</el-menu>
		<el-drawer custom-class="drawer" :append-to-body="appendtobody" :modal="modal" :close-on-click-modal="closeonclickmodal" title="图片中心" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
			<el-upload 
			:action="action"
			:on-success ="uploadsuccess"
			 :multiple="multiple"
			 list-type="picture-card" :auto-upload="true">
					<i slot="default" class="el-icon-plus"></i>
					<div slot="file" slot-scope="{file}">
					<img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
					<span class="el-upload-list__item-actions">
						<span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
							<i class="el-icon-zoom-in"></i>
						</span>
						<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
							<i class="el-icon-download"></i>
						</span>
						<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
							<i class="el-icon-delete"></i>
						</span>
					</span>
				</div>
			</el-upload>
			<el-dialog top="0" :close-on-click-modal="closeonclickmodal" custom-class="imgshow" :modal="modal" :visible.sync="dialogVisible">
				<img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</el-drawer>
	</div>
</template>

<script>
	
	export default {
		name: 'headermenu',
		data() {
			return {
				action:this.$http.upload+"/"+this.$urls.uploadfile,
				multiple:true,
				activeIndex: '1',
				activeIndex2: '1',
				drawer: false,
				direction: 'rtl',
				dialogImageUrl: '',
				dialogVisible: false,
				disabled: false,
				modal:false,
				closeonclickmodal:false,
				appendtobody:true,
				username:""
			};
		},
		methods: {
			submitUpload(content) {
			  console.log("提交");
             
            },
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(done) {
				// this.$confirm('确认关闭？')
				// 	.then(_ => {
						done();
				// 	})
				// 	.catch(_ => {});
			},
			handleRemove(file) {
				console.log(file);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleDownload(file) {
				console.log(file);
			}
			,
			uploadsuccess:function(response, file, fileList){
				file.url=response.ob[0];
			},
			quit:function(){
				this.$store.username==null;
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("username");
				window.location.href="/#/adminlogin";
			}
		},
		mounted:function(){
			if(this.$store.username==null||this.$store.username=="")
			this.username = sessionStorage.getItem("username");
			else
			this.username = this.$store.username;
		}
	}
</script>

<style>
	.el-menu-demo {
		width: 100%;
	}
     .el-upload-list li{
		 width:50px !important;
		 height:50px !important;
	 }
	 .el-upload--picture-card{
		 width:50px !important;
		 height:50px !important;
		 line-height: 60px;
	 }
	 .el-dialog.imgshow{
		 width:100% !important;
	 }
	 .el-drawer__container{
		 width:100%;
		 z-index:2002 !important;
		 position: absolute !important;
		 right:0 !important;
		 top:0 !important;
		 height:100% !important;
		 left:auto !important;
	 }
	 .el-drawer.rtl{
		 width:100% !important;
	 }
	 .el-dialog__wrapper[role=presentation]{
		 z-index:2002 !important;
		 width:30%;
		 right:0 !important;
		 left:auto !important;
		 border-left:2px solid black;
	 }
	 .el-drawer__body .el-dialog__wrapper{
		 width:30% !important;
		 height:286px !important;
		 right: 0 !important;
		 left:auto !important;	 }
</style>
