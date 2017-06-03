<template>
	<div class="group-form">
		<div class="group-form-line">
			<label class="control-label">用户名:</label>
			<input type="text" name="username" v-model="username" class="from-control">
			<span class="err">{{user.errText}}</span>
		</div>
		<div class="group-form-line">
			<label class="control-label">密码:</label>
			<input type="text" name="password" v-model="password" class="from-control">
			<span class="err">{{passw.errText}}</span>
		</div>
		<div class="group-form-line">
			<div class="group-form-btn">
				 <a class="button" @click="onLogin" :disabled="errors.errorStatus" :class="{disable:errors.errorStatus}">登录</a>
				 <a class="button" @click="closeLog">取消</a>
			 </div>
		</div>
		<div class="group-form-line">
			{{error.errorText}}
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
				message:'About',
				password:'',
				username:'',
				error:{
					errorText:''
				}
			}
		},
		computed:{
			user(){
				let status = false;
				let errText = '';
				if(!/@/g.test(this.username)){
					errText='用户名不包含@';
					status = false;
				}else{
					status = true
				}
				if(!this.userFlag){
					this.userFlag = true;
					return{status:false,errText:''}
				}else{
					return{status,errText}
				}
				

			},
			passw(){
				let status = false;
				let errText = '';
				if(!/^\w{1,6}$/g.test(this.password)){
					errText='密码长度应1-6位数字';
					status = false;
				}else{
					status = true;
				}
				
				if(!this.passwFlag){
					this.passwFlag = true;
					return{status:false,errText:''}
				}else{
					return{status,errText}
				}				
			},
			errors(){
				let errorStatus = false;
				if(this.userFlag&&this.passwFlag){
					errorStatus = !(this.user.status&&this.passw.status);
				}
				return{errorStatus}
			}
		},
		methods:{
			closeLog(){
				this.$emit('on-close')
			},
			onLogin(){
				if(this.user.status&&this.passw.status){
					this.error.errorText='';
					this.$http.post('api/login',{username:this.username,password:this.password}).then((data)=>{
						this.$emit('on-success',data)
					},(err)=>{
						console.log(err)
					})
				}else{
					this.errorText = '部分选项验证未通过！'
				}
			}
		}
	}
</script>

</style>