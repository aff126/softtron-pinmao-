<template>
	<div class="container login">
		<video autoplay muted loop style="width= 100%; height=100%; object-fit: fill" id="bgvid">
			<source src="../../assets/admin.mp4" type="video/mp4">
		</video>
		<el-dialog title="系统登录" :close-on-click-modal="clickmodal" :modal="modal" :visible.sync="dialogFormVisible">
			<el-form :model="user" >
				<el-form-item  >
					<el-input placeholder="请输入用户名" v-model="user.username"  autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item >
					<el-input placeholder="请输入密码" v-model="user.password" show-password  autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				{{message}}
				<el-button type="primary" @click="login()">登 录</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: "login",
		data: function() {
			return {
				dialogFormVisible:true,
				modal:false,
				user:{username:"",password:""},
				clickmodal:false,
				message:""
			}
		},
		methods:{
			login:function(){
				this.$http.post(this.$urls.adminlogin,{user:JSON.stringify(this.user)},(result)=>{
					 if(result.data.code==500)
					 this.message = result.data.message;
					 else{
					 //登录成功
					 this.$Token= result.data.ob.token;
					 //将token存入缓存中
					 sessionStorage.setItem("token", result.data.ob.token);
					 sessionStorage.setItem("username", this.user.username);
					 this.$Username= this.user.username;
					 this.$store.username = this.user.username;
					 console.log(this.$Username);
					 this.$http.setToken(result.data.ob.token);
					 window.location.href="/#/admin";
					 }
				});
			}
		}
	}
</script>

<style>
	html,
	body {
		height: 100%;
	}
	#app {
		height: 100%;
	}

	.login .el-menu.el-menu--horizontal {
		border: none !important;

	}

	.login .el-menu-demo {
		background: none;

	}

	.login .el-menu li {
		font-size: 40px;
	}

	#bgvid{
		height:99.77vh;
		width: 100%;
	}

	/* .container.login {
		height: 100%;
		background: url("../../assets/admin.mp4");
		background-size: auto 150%;
		background-position: 0 -200px;
	} */
	.login .el-dialog{
		width:400px;
		margin-left:60%;
    
		
	}
	.el-dialog{
		opacity:0.8;
		background: none;
		border: none;
	}
	.login .el-form-item__content{
		display: flex;
		justify-content: center;
	}
	.login .el-form-item__label{
			line-height: 60px;
	}
	.login .el-icon-close{
		display: none;
	}
</style>
