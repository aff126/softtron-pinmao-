<template>
	<el-row>
		<el-col :span="12">
			<el-tree :data="data" show-checkbox node-key="categoryId" default-expand-all :expand-on-click-node="false" :render-content="renderContent">
			
			</el-tree>
		</el-col>
		<el-col :span="12">
			<div class="form">
			<el-input v-model="category.categoryId" :disabled="true" placeholder="分类id"></el-input>
			<el-input v-model="category.categoryname" placeholder="分类名称"></el-input>
			</div>
			 <el-button class="submit" type="primary" @click="submit()">提交</el-button>
		</el-col>
	</el-row>
</template>

<script>
	import TCategory from "@/domains/TCategory";
	const Qs = require('qs');
	const data = [new TCategory(1,"分类列表",[])];
	export default {
		name: "category",
		data: function() {
			return {
				category: new TCategory("","",[]),
				data: JSON.parse(JSON.stringify(data)),
			}
		},
		//数据初始化
		mounted:function(){
			this.$http.get(this.$urls.findallcategory, {},(response)=>{
				if(response.data.resultmap.code=='200'){
				//插入成功接收categoryId
				if(response.data.category!=null&&response.data.category!=""){
					this.data[0].children =response.data.category;
				}	
				//this.$Notice.message(response.data.message,'success');
				}else{
				this.$Notice.message(response.data.resultmap.message,'error');	
				}
			});
		}
		,
		 methods: {
      append(data) {
        const newChild = new TCategory(-1,"分类名称",[],data.categoryId);
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
		this.category = newChild; 
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.categoryId === data.categoryId);
        const categoryId = data.categoryId;
		this.$http.post(this.$urls.deleteCategory,data
		,(response)=>{
			if(response.data.resultmap.code=='200'){
			//移除
			children.splice(index, 1);
			this.$Notice.message(response.data.resultmap.message,'success');
			}else{
			this.$Notice.message(response.data.resultmap.message,'error');	
			}
		});
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span class="label" on-click={ () => this.choice(data) }>{data.categoryname}</span>
            <span class='buttons'>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      },choice:function(data){
		  this.category = data;
	  },
	  submit: function() {
		// this.category.categoryname = '';
		console.log(Qs.stringify(this.category))
		if(this.category.categoryId==-1){
	  	this.$http.post(this.$urls.savecategory, 
	  		this.category
	  	,(response)=>{
			if(response.data.resultmap.code=='200'){
			//插入成功接收categoryId
			if(response.data.categroyId!=null&&response.data.categroyId!=""){
				this.category.categoryId = response.data.categroyId;
			}	
			this.$Notice.message(response.data.resultmap.message,'success');
			}else{
			this.$Notice.message(response.data.resultmap.message,'error');	
			}
		  })
		}else{
			this.$http.post(this.$urls.updatacategory, 
	  		this.category
	  	,(response)=>{
			if(response.data.resultmap.code=='200'){
			this.$Notice.message(response.data.resultmap.message,'success');
			}else{
			this.$Notice.message(response.data.resultmap.message,'error');	
			}
		  })
		}
		  


	  }
    }
	}
</script>

<style>
    .el-row{
		padding:50px 0;
		width:100%;
	}
	.el-row .el-col:first-child{
		border-right:1px solid #1E88E5;
	}
	.el-col {
		height:100%;
		font-size: 16px;
	}
	.el-tree{
	   width:70%;
	   margin: 0 auto;
	}
	.form{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.el-input{
		width:80%;
		margin:10px auto;
		
	}
	.el-button.submit{
		display: block;
		margin:0 auto;
	}
	.custom-tree-node{
		width:100%;
		line-height: 26px;
	}

	.buttons{
	  	float: right;
	
	}
	.label{

	}
</style>
