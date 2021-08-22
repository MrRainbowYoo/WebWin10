<template>
  <SystemBox :width="width" :height="height" :bottom="bottom" :right="right">
    <div class="volume-title">扬声器 (Conexant SmartAudio HD)</div>
    <div class="volume-slider">
      <span class="iconfont icon-volume"></span>
      <el-slider v-model="volume" :step="1" :show-tooltip="showTooltip">
      </el-slider>
      <span>{{volume}}</span>
    </div>
  </SystemBox>
</template>

<script>
import SystemBox from "@/components/SystemBox";

export default {
  data() {
    return {
      volume: 20,
      showTooltip: false,
    };
  },
  props: {
    width: Number,
    height: String,
    bottom: Number,
    right: Number,
  },
  components: {
    SystemBox,
  },
  methods: {
    // 防抖
    debounce(func,wait){
      let timeout;
      return function(){
        let context = this;
        let args = arguments;
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(()=>{
          func.apply(context,args)
        },wait)
      }
    },
    handleScroll(e){
      let direction = e.deltaY > 0 ? 'down' : 'up'
      if(direction === 'down'){
        this.volume -= 2
        if(this.volume < 0)
          this.volume = 0
      }else{
        this.volume += 2
        if(this.volume > 100)
          this.volume = 100        
      }
    }
  },
  mounted() {
    //监听鼠标滚动事件
    // 注：不能使用debounce防抖，手动改变作用域会导致该事件无法在组件销毁时被移除，因而产生bug。
    window.addEventListener('mousewheel', this.handleScroll, true)
  },
  destroyed(){
    
    window.removeEventListener('mousewheel',this.handleScroll,true)
  }
};
</script>

<style lang="less">
@sliderColor: rgb(0, 120, 215);

.volume-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding-right: 10px;
    margin-top: auto;

    span {
        width: 20px;
    }

    .el-slider {
        // width: 80%;
        flex: 1;
        margin: 0 10px;
    }

  .el-slider:hover {
    .el-slider__button {
      background-color: #fff;
    }
  }

  .el-slider__bar {
    background-color: @sliderColor;
    height: 2px;
  }

  .el-slider__button {
    width: 5px;
    height: 20px;
    border: none;
    border-radius: 10px;
    background-color: @sliderColor;
    transition: 0;
    margin-bottom: 2px;
  }

  .el-slider__runway {
    border-radius: 0;
    height: 2px;
    background-color: rgb(125, 125, 125);
  }
}
</style>