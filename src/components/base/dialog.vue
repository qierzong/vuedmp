<template>
	<div class="dialog">
		<div class="cover"  @click="closeLog" v-if="isShow"></div>
		<transition name="drop">	
			<div class="commonForm" v-if="isShow">		
				<div class="formTitle">
					<slot name="title"></slot>
					<span class="closeBtn" @click="closeLog">x</span>
				</div>			
				<div class="formContent">
					<slot></slot>
				</div>			
			</div>
		</transition>	
	</div>
</template>
<script>
	export default{
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				message:'About'
			}
		},
		methods:{
			closeLog(){
				this.$emit('on-close')
			},
			onLogin(){

			},
		}
	}
</script>
<style scoped>
	.drop-enter-active{
		transition: all .5s ease;
	}
	.drop-leave-active{
		transition: all .3s ease;
	}
	.drop-enter{
		transform: translateY(-300px);
	}
	.drop-leave-active {
	  transform: translateY(-300px);
	}
	.dialog{
		width: 100%;
		height: 100%;
	}
	.cover{
		width:100%;
		height: 100%;
		position:fixed;
		top:0;
		left:0;
		background-color: rgba(0,0,0,.3);
	}
	.commonForm{
		position: absolute;
		height: auto;
		width:500px;
		left: 50%;
		top: 50%;
		margin-top: -150px;
		margin-left: -250px;
		background-color: #fff;
		border:1px solid #e4dfdc;
		z-index: 20;
	}
	.formTitle{
		width:100%;
		line-height: 20px;
		color:#fff;
		background-color: green;
		padding: 5px 10px;
		position: relative;
	}
	.formContent{
		padding: 15px 10px;
		text-align: left;
		line-height: 20px;
	}
	.closeBtn{
		border-radius: 50%;
		position: absolute;
		top:2px;
		right: 10px;
	}
</style>
<style>
	/*表单*/
	.group-form-line{
		padding: 4px 8px;
	}
	.control-label{
		display: inline-block;
		width: 56px;
	}
	.from-control{
		display: inline-block;
		width: 140px;
	}
	.button{
		padding:6px 10px;
		background-color: green;
		color: #fff;
		box-shadow: 0;
	}
	.group-form-btn{
		margin-top: 10px;
	}
	.err{
		color: red;
	}
	.disable{
		opacity: 0.3;
	}
</style>