<template>
	<div class="container">
		
	<!--商品dialog-->
	<productdialog  :product="product" :dialogFormVisible="dialogFormVisible" @sumitDialog="submit($event)" v-on:closeDialog="dialogFormVisible = $event"></productdialog>	
	<el-button type="primary"  @click="create()">创建</el-button>	
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column v-for="title in titles" fixed :prop="title.prop" :label="title.label" :width="title.width">
		</el-table-column>
		
		<el-table-column fixed="right" label="操作" width="200">
			<template slot-scope="scope">
				<el-button @click="handleShow(scope.row)" type="text" size="small">查看</el-button>
			    <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
	<el-pagination class="center" @current-change="change"
  background
  layout="prev, pager, next"
  :total="total">
</el-pagination>
	</div>
</template>

<script>
	import productdialog from "@/components/admin/ProductDialog"
	export default {
		name: "product",
		components:{
			productdialog
		},
		data: function() {
			return {
				total:0,
				titles: [{
						prop: "productId",
						label: "商品Id",
						width: "300"
					},
					{
						prop: "productName",
						label: "商品名称",
						width: "300"
					},
					{
						prop: "productPrice",
						label: "商品价格",
						width: "300"
					}
				],
				tableData: [],
				dialogFormVisible:false,
				product:{productId:-1}
			}
		},
		mounted:function(){
			this.find(1);
			
		},
		methods: {
			find:function(page){
				this.$http.get(this.$urls.findallproducts, {
					page:page,count:10
				},(response)=>{
					if(response.data.code=='200'){
					//插入成功接收categoryId
					if(response.data.ob!=null&&response.data.ob!=""){
						this.tableData =response.data.ob.products;
						this.total =response.data.ob.total; 
					}	
					//this.$Notice.message(response.data.message,'success');
					}else{
					this.$Notice.message(response.data.message,'error');	
					}
				});
			},
			//分页
			change:function(page){
				this.find(page);
			}
			,
			create:function(){
				this.dialogFormVisible = true;
				this.product = {productId:"-1"};
			}
			,
			submit: function(ob) {
				this.$http.get(this.$urls.insertproduct, {
					product:ob.product
				}, (response) => {
					if (response.data.code == '200') {
						//插入成功接收categoryId
						this.dialogFormVisible = ob.ifClose;
						if(ob.product.productId==-1){//插入
						ob.product.productId = response.data.ob;//商品id
						this.tableData.push(ob.product);
						}
						this.$Notice.message(response.data.message,'success');
					} else {
						this.$Notice.message(response.data.message, 'error');
					}
				});
			},
			  handleDelete(index, row) {
				 this.$http.get(this.$urls.deleteproduct, {
				 	productId:row.productId
				 }, (response) => {
				 	if (response.data.code == '200') {
						this.tableData.splice(index, 1);
				 		this.$Notice.message(response.data.message,'success');
				 	} else {
				 		this.$Notice.message(response.data.message, 'error');
				 	}
				 });
              },handleShow:function(row){
				  this.dialogFormVisible = true;
				  this.product = row;
			  }
		}
	}
</script>

<style>
	.container{
		width:100%;
	}
	.el-table{
	}
	.center{
		text-align: center;
	}
</style>
