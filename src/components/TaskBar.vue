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

    <div class="bar-body"></div>
    
    <div class="bar-right">
      <div class="win-item" title="80%可用">
        <span class="iconfont icon-iconset0251"></span>
      </div>
      <div class="win-item" title="TP_LINK_666
  Internet访问">
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
  </div>
</template>

<script>
export default {
  name: 'TaskBar',
  data(){
    return{
      time:"",
      date:[],
      weekday:""
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
    }
  },
  mounted(){
    this.updateCurrentTime()
  }
}
</script>
<style scoped lang="less">
  @barHeight : 50px;

  .taskbar {
    width: 100%;
    height: @barHeight;
    background-color: rgb(28, 28, 28);
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
      color: rgb(91, 128, 236);
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

    .icon-search {
      position: absolute;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    & input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding-left: 50px;
      padding-right: 10px;
      box-sizing: border-box;
      background-color: rgb(242, 242, 242);
    }
  }

  .bar-body {
    flex: 1;
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
