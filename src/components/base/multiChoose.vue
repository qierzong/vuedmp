<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li v-for="(item,index) in multichooses" @click="chooseToggle(item,index)" :class="{active:nowIndexs.indexOf(index)!== -1}" :title="item.label">{{item.label}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      nowIndexs:[0]
    }
  },
  props:{
    multichooses:{
      type:Array,
      default:[
        {
          label:'lalaal',
          value:'ldld'
        }
      ]
    }
  },
  methods:{
    chooseToggle(item,index){
      var _nowIndexs = this.nowIndexs;
      if(this.nowIndexs.indexOf(index)=== -1) {
        this.nowIndexs.push(index)
      }else{
        this.nowIndexs =  _.remove(_nowIndexs, (idx)=>{
          return idx !== index
        })
      }
      let newObjArr = _.map(_nowIndexs,(idx)=>{
        return this.multichooses[idx]
      })
      this.$emit('on-change',newObjArr)
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
