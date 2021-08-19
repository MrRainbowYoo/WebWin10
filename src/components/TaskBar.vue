<template>
  <div class="taskbar">
    <div class="bar-left">
      <div class="win-item" title="开始">
        <span class="iconfont icon-win"></span>
      </div>
      <div class="win-search">
        <label for="search" class="iconfont icon-search"></label>
        <input type="text" id="search" placeholder="在这里输入你要搜索的内容">
      </div>
    </div>

    <div class="bar-body">
      
      <div class="win-item"><TaskApp /></div>
            <div class="win-item"><TaskApp /></div>
                  <div class="win-item"><TaskApp /></div>
    </div>
    
    <div class="bar-right">
      <div class="win-item" title="80%可用" ref="CellBox" id="CellBox" @click.stop="changeNowBox($event)">
        <span class="iconfont icon-iconset0251"></span>
      </div>
      <div class="win-item" title="TP_LINK_666
  Internet访问" ref="TestBox" id="TestBox" @click.stop="changeNowBox($event)">
        <span class="iconfont icon-wuxianwifi"></span>
      </div>
      <div class="win-item" title="扬声器：88%">
        <span class="iconfont icon-volume"></span>
      </div>
      <div class="win-item" title="中文模式">
        <span class="language">中</span>
      </div>      
      <div class="win-item" :title="date[0]+'年'+date[1]+'月'+date[2]+'日'+'\n星期'+weekday">
        <div class="win-time">
          <div class="time">{{time}}</div>
          <div class="date">{{date[0]+"/"+date[1]+"/"+date[2]}}</div>
        </div>
      </div>      
      <div class="win-item" title="没有新通知(关闭)">
        <span class="iconfont icon-icon--"></span>
      </div>
      <div class="win-item"></div>      
    </div>

    <!-- <transition name="showBox">
      <component v-if="showBox" :is="nowBox.name" :width="nowBox.width" :height="nowBox.height" :bottom="nowBox.bottom" :left="nowBox.left"></component>
    </transition> -->
  </div>
</template>

<script>
import TaskApp from '@/components/TaskApp'
// import CellBox from '@/components/CellBox'

export default {
  name: 'TaskBar',
  data(){
    return{
      time:"",
      date:[],
      weekday:"",
      nowBox: ""
    }
  },
  computed:{
    showBox(){
      return this.$store.state.showBox
    }
  },
  methods:{
    updateCurrentTime(){
      setInterval(this.getCurrentTime,500)
    },
    getCurrentTime(){
      let dateObj = new Date()
      let hours = dateObj.getHours().toString().padStart(2,'0')
      let minutes = dateObj.getMinutes().toString().padStart(2,'0')
      let year = dateObj.getFullYear()
      let month = dateObj.getMonth() + 1
      let day = dateObj.getDate()
      let week = dateObj.getDay()
      let weeks = ['日','一','二','三','四','五','六']
      this.time = `${hours}:${minutes}`
      this.date = [year,month,day]
      this.weekday = weeks[week]
    },
    changeNowBox(e){
      // console.log(e.currentTarget.id)
      let boxName = e.currentTarget.id
      if(this.showBox != boxName){
        let obj = this.$refs[boxName].getBoundingClientRect()
        let nowBox = {
            name:boxName,
            width: 350,
            height: 250,
            bottom: 50, //参考barHeight
            left: parseInt(obj.left),
        }
        this.$store.commit('changeNowBox',nowBox)
      }else
        boxName = ""
      this.$store.commit('changeShowBox',boxName)
    }
  },
  mounted(){
    this.updateCurrentTime()
  },
  components: {
    TaskApp
  }
}
</script>
<style scoped lang="less">
  @barHeight : 50px;
  @bg: linear-gradient(rgb(30,30,30),rgb(26,26,26),rgb(30,30,30));

  .taskbar {
    width: 100%;
    height: @barHeight;
    // background-color: @bkColor;
    background: @bg;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .win-item {
    color: #fff;
    height: @barHeight;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bar-left {
    display: flex;
  }

  .win-item:hover {
    background-color: rgba(255, 255, 255, .2);
    & .icon-win {
      color: rgb(66, 156, 227);
    }
  }

  .icon-win {
    width: @barHeight;
    font-size: 20px;
  }

  .win-search {
    width: 250px;
    height: @barHeight;
    position: relative;
    cursor: text;

    .icon-search {
      position: absolute;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: text;
    }

    & input {
      width: 100%;
      height: 100%;
      border: 3px solid transparent;
      outline: none;
      padding-left: 50px;
      padding-right: 10px;
      box-sizing: border-box;
      background-color: rgb(242, 242, 242);
    }

    &:hover input{
      border: 3px solid rgba(0, 0, 0, .3);
      background-color: #fff;
    }

    & input:focus{
      border: 3px solid rgb(0, 120, 215);
    }
  }

  .bar-body {
    margin-left: 5px;
    flex: 1;
    display: flex;
    height: 100%;
  }

  .bar-right {
    display: flex;

    & .iconfont {
      width: 25px;
    }

    & .language {
      padding: 0 5px;
      cursor: default;
    }

    & .win-time {
      font-size: 12px;
      padding: 0 10px;
      cursor: default;
    }

    & .icon-iconset0251 {
      margin-top: 3px;
    }

    & .icon-wuxianwifi {
      font-size: 13px;
      margin-top: 3px;
    }

    & .icon-volume {
      font-size: 16px;
    }

    & .icon-icon-- {
      font-size: 23px;
    }

    .win-item:last-of-type {
      margin-left: 10px;
      width: 5px;
      border-left: 1px solid rgba(255, 255, 255, .3);
    }
  }
</style>
