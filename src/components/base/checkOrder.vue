<template>
	<div>
		<my-new-dialog :is-show="isShowCheckOrder" @on-close="checkStatus">
			<span slot="title">提示</span>
			请检查你的支付状态！
			<div class="button1" @click="checkStatus">
				支付成功
			</div>
			<div class="button1" @click="checkStatus">
				支付失败
			</div>
		</my-new-dialog>
		<my-new-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
			<span slot="title">提示信息</span>
			<p>购买成功！</p>
		</my-new-dialog>
		<my-new-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
			<span slot="title">提示信息</span>
			<p> 购买失败！</p>
		</my-new-dialog>
	</div>
</template>
<script>
	import MyNewDialog from './dialog'
	export default{
		components:{
			MyNewDialog
		},
		props:{
			isShowCheckOrder:{
				type:Boolean,
				default:false
			},
			orderId:{
				type:String,
				default:null
			}
		},
		data(){
			return{
				isShowSuccessDialog : false,
				isShowFailDialog : false
			}
		},
		methods:{
			checkStatus(){
				this.$http.post('/api/checkOrder', {
					orderId: this.orderId
				})
				.then((res) => {
					this.isShowSuccessDialog = true
					this.$emit('on-close-check-dialog')
				}, (err) => {
					this.isShowFailDialog = true
					this.$emit('on-close-check-dialog')
				})
			},
			toOrderList(){
				this.$router.push({path: '/orderList'})
			}
		}
	}
</script>
<style scoped>
	
</style>