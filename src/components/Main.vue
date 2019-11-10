<template>
	<el-container style="border: 1px solid #eee">
		<el-aside width="200px">
			<el-menu :default-openeds="['1', '3','2','4']">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>分类</template>
					<el-menu-item-group>
						<router-link index="1-1" to="/admin/1-1"><el-menu-item >分类管理</el-menu-item></router-link>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-message"></i>商品</template>
					<el-menu-item-group>
						<router-link index="2-1" to="/admin/2-1"><el-menu-item >商品管理</el-menu-item></router-link>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title"><i class="el-icon-menu"></i>企业宣传</template>
					<el-menu-item-group>
						<router-link index="3-1" to="/admin/3-1"><el-menu-item >资讯管理</el-menu-item></router-link>
						<router-link index="3-1" to="/admin/4-1"><el-menu-item >视频管理</el-menu-item></router-link>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title"><i class="el-icon-setting"></i>销售管理</template>
					<el-menu-item-group>
						<router-link index="4-1" to="/admin/4-1"><el-menu-item >交易查询</el-menu-item></router-link>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-aside>

		<router-view>
			
		</router-view>
	</el-container>
</template>

<script>
	export default {
		name: "maincontent",
		data() {
			return {}
		},
		mounted:function(){
			
		}
	};
</script>

<style scoped>
	.el-aside {
		color: #333;
	}

	.el-main {
	}
	.data{
		flex-direction: column;
	}
	.el-pagination{
		text-align: center;
	}
	a{
		display: inline-block;
	}
</style>
