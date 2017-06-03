<template>
  <div class="slide-show" @mouseover="clearInv()" @mouseout="runInv()">
    <div class="slide-img">
    <a :href="slides[curIndex].href">
    <transition name="trans-in">
      
        <img :src="slides[curIndex].src" v-if="isShow">
      
    </transition>
    <transition name="trans-out">
     
        <img :src="slides[curIndex].src" v-if="!isShow">
     
    </transition>
    </a>
    </div>
    <h2>{{slides[curIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(preIndex)">&lt;</li>
      <li v-for="(item , index) in slides" @click="goto(index)">
        <a href="##"  :class="{on:index == curIndex}">{{index+1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{curIndex:0,isShow:true }
  },
  props:{
    slides:{
      type:Array,
      default:[]
    },
    invTime:{
      type:Number,
      default:2000
    }
  },
  computed:{
    preIndex(){
      if(this.curIndex===0){
        return this.slides.length - 1;
      }else{
        return this.curIndex-1;
      }
    },
    nextIndex(){
      if(this.curIndex===this.slides.length - 1){
        return  0;
      }else{
        return this.curIndex+1;
      }
    }
  },
  methods:{
    goto(index){
      this.isShow = false;
      setTimeout(()=>{
        this.curIndex = index;
        this.isShow = true;
      },10)
      
    },
    runInv(){
      this.invId = setInterval(()=>{this.goto(this.nextIndex)},this.invTime)
    },
    clearInv(){
      clearInterval(this.invId)
    }
  },
  mounted(){
    this.runInv()
  }

}
</script>

<style scoped>
.trans-in-enter-active {
  transition: all .5s;
}
.trans-in-enter {
  transform: translateX(900px);
}
.trans-out-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  width: 900px;
  height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-img img {
  width: 100%; 
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
