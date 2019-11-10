<template>
	<div class="container">
		
	<!--商品dialog-->
	<newsdialog :news="news" :dialogFormVisible="dialogFormVisible" @sumitDialog="submit($event)" v-on:closeDialog="dialogFormVisible = $event"></newsdialog>	
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
	import newsdialog from "@/components/admin/Newsdialog"
	export default {
		name: "news",
		components:{
			newsdialog
		},
		data: function() {
			return {
				total:0,
				titles: [{
						prop: "newsId",
						label: "新闻Id",
						width: "300"
					},
					{
						prop: "newsTitle",
						label: "新闻标题",
						width: "300"
					},
					{
						prop: "dateCreated",
						label: "创建时间",
						width: "300"
					}
				],
				tableData: [],
				dialogFormVisible:false,
				news:{newsId:-1}
			}
		},
		mounted:function(){
			this.find(1);
		},
		methods: {
			find:function(page){
				this.$http.get(this.$urls.findallnews, {
					page:page,count:10
				},(response)=>{
					if(response.data.code=='200'){
					//插入成功接收categoryId
					if(response.data.ob!=null&&response.data.ob!=""){
						this.tableData =response.data.ob.news;
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
				this.news = {newsId:"-1"};
			}
			,
			submit: function(ob) {
				this.$http.get(this.$urls.insertnews, {
					news:ob.news
				}, (response) => {
					if (response.data.code == '200') {
						//插入成功接收categoryId
						this.dialogFormVisible = ob.ifClose;
						if(ob.news.newsId==-1){//插入
						ob.news.newsId = response.data.ob.newsId;//商品id
						ob.news.dateCreated = response.data.ob.dateCreated;
						this.tableData.push(ob.news);
						}
						this.$Notice.message(response.data.message,'success');
					} else {
						this.$Notice.message(response.data.message, 'error');
					}
				});
			},
			  handleDelete(index, row) {
				  console.log(row.newsId);
				 this.$http.get(this.$urls.deletenews, {
				 	newsId:row.newsId
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
				  this.news = row;
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
