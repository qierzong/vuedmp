<template>
	<div class="group-form">
		<div class="group-form-line">
			<label class="control-label">用户名1:</label>
			<input type="text" name="username" class="from-control">
		</div>
		<div class="group-form-line">
			<label class="control-label">密码1:</label>
			<input type="text" name="password" class="from-control">
		</div>
		<div class="group-form-line">
			<div class="group-form-btn">
					 <a class="button" @click="onRegister">注册</a>
					 <a class="button" @click="closeRegister">取消</a>
				 </div>
		</div>
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
			closeRegister(){
				this.$emit('on-close')
			},
			onRegister(){

			},
		}
	}
</script>
<style>
</style>