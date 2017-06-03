<template>
    <div class="counter-component">
      <div class="counter-btn" @click="minus"> - </div>
      <div class="counter-show">
        <input type="text" v-model="countModel" @keyup="writeNumber">
      </div>
      <div class="counter-btn" @click="add"> + </div>
    </div>
</template>

<script>
export default {
  props:{
    max:{
      type:Number,
      default:50
    },
    min:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      countModel:this.min
    }
  },
  watch:{
    countModel(){
      this.$emit('on-change',this.countModel)
    }
  },
  methods:{
    writeNumber(){
      if(typeof(this.countModel)==='string') this.countModel = Number(this.countModel.replace(/\D/g, ''))
      if(this.countModel<=this.min)  this.countModel=this.min
        else if(this.countModel>=this.max)  this.countModel=this.max
    },
    minus(){
      if(this.countModel>this.min){
        this.countModel--;       
      }else{
        return 
      }
    },
    add(){      
      if(this.countModel<this.max){
        this.countModel++;
      }else{
        return 
      }
    }
  }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
  padding: 0;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>
