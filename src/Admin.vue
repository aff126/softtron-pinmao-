<template>
	<el-container>
		<el-header>
			<headermenu></headermenu>
		</el-header>
		<el-main>
			<maincontent>
			
			</maincontent>
		</el-main>
		<el-footer>拼猫商城</el-footer>
		

	</el-container>
</template>

<script>
	import headermenu from "./components/Menu"
	import maincontent from "./components/Main"
	export default {
		name: 'admin',
		components: {
			headermenu,
			maincontent
		}
	}
</script>

<style>
	.right {
		float: right !important;
	}



	.el-header,
	.el-footer {
		background-color: rgb(84, 92, 100);
		color: white;
		text-align: center;
		line-height: 60px;
		padding: 0 !important;
	}

	.el-main {
		height: calc(100% - 120px);
		width: 100%;
	}

	.el-footer {
		/* position: fixed;
		bottom: 0;
		left: 0;
		width: 100%; */
	}
	.el-header{
		position: relative;
		z-index:2001;
	}
</style>
