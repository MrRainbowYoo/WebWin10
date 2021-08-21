<template>
  <SystemBox :width="width" :height="height" :bottom="bottom" :right="right" :padding="needPadding">
      <div class="calendar-box">
          <div class="calendar-top">
              <div class="current-time">{{time}}</div>
              <div class="current-date">{{date[0]+'年'+date[1]+'月'+date[2]+'日'}}</div>
          </div>
          <div class="calendar-body">
              <div class="my-btns">
                  <span class="iconfont icon-arrow-up-bold"></span>
                  <span class="iconfont icon-arrow-down-bold"></span>
              </div>
            <el-calendar v-model="dateValue" @mousemove.native="mask($event)"></el-calendar>
            <div class="mask-wrap" >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
          <div class="calendar-footer">
              <span>日期和时间设置</span>
          </div>
      </div>
  </SystemBox>
</template>

<script>
import SystemBox from '@/components/SystemBox'

export default {
    data(){
        return {
            needPadding: false,
            dateValue: new Date(),
            time:"",
            date:"",
            timer:null
        }
    },
    props:{
        width:Number,
        height:Number,
        bottom:Number,
        right:Number
    },
    created(){
        this.timer = setInterval(()=>{
            this.getCurrentTime()
        },100)
    },
    methods:{
        mask(ev){
            var borderLayer = document.querySelector(".mask-wrap");
            var x = ev.pageX;
            var y = ev.pageY;
            var bounding = borderLayer.getBoundingClientRect();
            borderLayer.style.visibility = 'visible'
            borderLayer.style.webkitMaskPosition = `${x - bounding.x - 80}px ${y -bounding.y - 80}px`;
        },
        getCurrentTime(){
            let dateObj = new Date()
            let hours = dateObj.getHours().toString().padStart(2,'0')
            let minutes = dateObj.getMinutes().toString().padStart(2,'0')
            let seconds = dateObj.getSeconds().toString().padStart(2,'0')
            let year = dateObj.getFullYear()
            let month = dateObj.getMonth() + 1
            let day = dateObj.getDate()
            this.time = `${hours}:${minutes}:${seconds}`
            this.date = [year,month,day]       
        }
    },
    beforeDestroy(){
        if(this.timer)
            clearInterval(this.timer)
    },
    components:{ SystemBox }
}
</script>

<style lang="less">
    @tdSize: 45px;

    .calendar-box {
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        &>div:not(.calendar-top) {
            padding: 20px;
        }

        .calendar-top{
            height: 100px;
            padding: 20px;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(255,255,255,.1);
            
            .current-time {
                color: #fff;
                font-size: 40px;
            }

            .current-date {
                color: rgb(166, 216, 255);
                margin-top: 5px;
            }
        }

        .calendar-body{
            flex: 1;
            position: relative;
            cursor: default;

            .my-btns {
                width: 144px;
                // border: 1px solid #fff;
                position: absolute;
                right: 25px;
                top: 32px;

                span {
                    color: rgba(255, 255, 255, .8);
                    display: inline-block;
                    text-align: center;
                    font-size: 20px;
                    width: 50%;

                    &:hover {
                        color: #fff;
                    }
                }
            }
            
            .el-calendar {
                background-color: transparent;

                .el-button-group button:nth-of-type(2){
                    display: none;
                }

                .el-button-group button {
                    opacity: 0;
                    margin: 0 5px;
                }

                .el-calendar__header {
                    padding: 12px 0;
                    border-bottom: none;

                    .el-calendar__title {
                        color: rgba(255, 255, 255, .8);
                    }
                }

                .el-calendar__body {
                    padding: 0;
                }
                .el-calendar-table thead th {
                    color: #fff;
                    text-align: center;
                    font-size: 12px;
                }        
                .el-calendar-table .el-calendar-day {
                    height: @tdSize;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;                    
                }
                .el-calendar-table td {
                    border: 3px solid transparent;
                    box-sizing: border-box;

                    &:hover {
                        border: 3px solid rgba(255, 255, 255, .5);

                        .el-calendar-day {
                            background-color: transparent;
                        }
                    }
                }      
                .el-calendar-table:not(.is-range) td.next, 
                .el-calendar-table:not(.is-range) td.prev {
                    color: rgba(255,255,255,.3);
                }          
                .el-backtop, 
                .el-calendar-table td.is-today {
                    background-color: rgb(0,120,215) !important;
                    color: #fff;
                    font-weight: bold;
                }   
                .el-calendar-table td.is-selected {
                    border: 3px solid rgb(0,120,215) !important;
                    background-color: transparent;

                    &.is-today{
                        .el-calendar-day{
                            border: 3px solid #000;

                        }
                    }
                }             
            }

            .mask-wrap {
                padding: 0 20px;
                box-sizing: border-box;
                width: 100%;
                height: (@tdSize+6)*6;
                position: absolute;
                top: @tdSize*2.5;
                left: 0;
                z-index: -1;
                // background-color: rgba(255, 255, 255, .1);
                background-color: transparent;
                display: grid;
                grid-template-columns: repeat(7,1fr);
                grid-template-rows: repeat(6,1fr);

                div{
                    border: 2px solid rgba(255, 255, 255, .3);
                }

                -webkit-mask-image: radial-gradient(circle at center, white 0%, transparent 80px);
                -webkit-mask-repeat: no-repeat;
                -webkit-mask-size: 160px 160px;
                visibility: hidden;
            }
        }

        .calendar-footer{
            height: 50px;
            cursor: pointer;

            span {
                color: rgb(155,200,234);

                &:hover {
                    color: rgba(255, 255, 255, .3);
                }
            }
        }
    }
</style>