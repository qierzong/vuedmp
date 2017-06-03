<template>
	<div class="connect-inner">
		<div class="blockLeft">
			<div class="blockList">
				<div class="blockTitle">
					产品列表
				</div>
				<template v-for="item in blockList">
					<h3 class="itemTitle">{{item.title}}</h3>
					<ul class="blockItem">
						<li v-for="itemLi in item.list">
							<a :href="'#'+itemLi.url">{{itemLi.name}}</a>
							<span class="hot" v-if="itemLi.hot">hot</span>
						</li>
					</ul>
				</template>
			</div>
			<div class="blockList">
				<div class="blockTitle">
					最新消息
				</div>
				<ul class="blockItem">
					<li v-for="item in newsList">
						<a :href="item.url">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="blockRight">
			<slide-show :slides="slides"></slide-show>
			<div class="productList">
				<div class="productItem" v-for="(item,index) in boardList" :class="{'marginR0':index%2}">
					<div :class="'img-'+index">						
					</div>
					<div class="item_right">
						<h5>{{item.title}}</h5>
						<p>{{item.description}}</p>
						<router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import slideShow from '../components/SlideShow'
	export default{
		created(){
			this.$http.get('/api/getNewsList')
			.then((data)=>{
				this.newsList = data.data;
			},(err)=>{
				console.log(err)
			})
			this.$http.get('/api/getBlockList')
			.then((data)=>{
				this.blockList = data.data
			},(err)=>{
				console.log(err)
			})
			this.$http.get('/api/getBroadList')
			.then((data)=>{
				this.boardList = data.data
			},(err)=>{
				console.log(err)
			})

		},
		data(){
			return{
				blockList: {
				},
				newsList:[
				],
				boardList: [],
				invTime: 2000,
				slides: [
				{
					src: require('../assets/slideShow/pic1.jpg'),
					title: 'xxx1',
					href: 'detail/analysis'
				},
				{
					src: require('../assets/slideShow/pic2.jpg'),
					title: 'xxx2',
					href: 'detail/count'
				},
				{
					src: require('../assets/slideShow/pic3.jpg'),
					title: 'xxx3',
					href: 'detail/publish'
				},
				{
					src: require('../assets/slideShow/pic4.jpg'),
					title: 'xxx4',
					href: 'detail/forecast'
				}
				]
			}
		},
		components:{
			slideShow
		}
	}
</script>
<style scoped>
	.connect-inner{
		width:1200px;
		margin: 30px auto;
		height:900px;
		background-color: #eee;
	}
	.blockLeft{
		width:280px;
		background-color: #eee;
		text-align: left;
		float:left;
	}
	.blockList{
		margin-bottom: 20px;
	}
	.blockTitle{
		background-color: green;
		color:#fff;
		font-weight: bold;
		height:40px;
		line-height: 40px;
		padding:0 10px;
	}
	.itemTitle{
		height: 50px;
		line-height: 50px;
		padding:0 10px;
		background-color: #fff;
		margin-top: 5px;
	}
	.blockItem{
		background-color: #fff;
	}
	.blockItem li{
		line-height: 30px;
		padding:0 20px;
		word-wrap: break-word;
	}
	.hot{
		background-color: red;
		color:#fff;
		border-radius:50%;
		padding: 5px;
	}
	.blockRight{
		width:900px;
		float: right;
		height:900px;
	}
	.banner{
		height:300px;
	}
	.productItem{
		width: 430px;
		height: 160px;
		padding: 20px;
		background-color: #fff;
		margin-bottom: 10px;
		float: left;
		margin-right:10px;
	}
	.marginR0{
		margin-right: 0;
	}
	.img-0{
		width:100px;
		height:100px;
		background: url(../assets/images/1.png) no-repeat;
		padding-right: 20px;
		float: left;
	}
	.img-1{
		width:100px;
		height:100px;
		background: url(../assets/images/2.png) no-repeat;
		padding-right: 20px;
		float: left;
	}
	.img-2{
		width:100px;
		height:100px;
		background: url(../assets/images/3.png) no-repeat;
		padding-right: 20px;
		float: left;
	}
	.img-3{
		width:100px;
		height:100px;
		background: url(../assets/images/4.png) no-repeat;
		padding-right: 20px;
		float: left;
	}
	.item_right{
		width:270px;
		float: right;
	}
	.item_right h5{
		line-height: 30px;
	}
	.item_right p{
		line-height: 20px;
	}
	.item_right .button{
		display: inline-block;
		padding:10px;
		margin-top: 10px;
	}
</style>