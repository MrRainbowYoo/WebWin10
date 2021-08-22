<template>
  <SystemBox :width="width" :height="height" :bottom="bottom" :right="right">
    <div class="notice-box">
      <div class="tip">
        <span class="tip-title">管理通知</span>
      </div>
      <div class="wrap">没有新通知</div>
      <div class="btn-group" @mousemove="mask2($event)" :class="{'fold':fold}">
        <span class="tip-title" @click="changeFold">{{fold ? '展开':'折叠'}}</span>
        <div class="btn-wrap">
          <div class="mask-layer">
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
          <div
            class="btn-item"
            v-for="(item, index) in btns"
            :key="index"
            @click="changeBtnStatus(item.name)"
            :class="{
              active: active.includes(item.name),
              disabled: disabled.includes(item.name),
            }"
          >
            <span class="iconfont" :class="item.icon"></span>
            <div class="item-name">{{ item.name }}</div>
          </div>
        </div>
        <div class="light-setting">
          <div class="mask2"></div>
          <span class="iconfont icon-icon-"></span>
          <el-slider v-model="lightValue" :step="1"></el-slider>
        </div>
      </div>
    </div>
  </SystemBox>
</template>

<script>
import SystemBox from "@/components/SystemBox";

export default {
  name: "NoticeBox",
  data() {
    return {
      lightValue: 80,
      btns: [
        { name: "平板模式", icon: "icon-pad" },
        { name: "定位", icon: "icon-dingwei" },
        { name: "节电模式", icon: "icon-di" },
        { name: "蓝牙", icon: "icon-lanya" },
        { name: "夜间模式", icon: "icon-baitianmoshimingliangmoshi" },
        { name: "移动热点", icon: "icon-xinhao" },
        { name: "飞行模式", icon: "icon-feijichang" },
        { name: "就近共享", icon: "icon-fenxiang" },
        { name: "所有设置", icon: "icon-swticonshezhitianchong" },
        { name: "网络", icon: "icon-icon-test" },
        { name: "连接", icon: "icon-wangluo-" },
        { name: "投影", icon: "icon-touping" },
        { name: "VPN", icon: "icon-vpn" },
        { name: "专注助手", icon: "icon-yejianmoshishenyemoshiyueliang" },
        { name: "屏幕截图", icon: "icon-line-screenshotpingmujietu-01" },
      ],
      active: ["蓝牙"],
      disabled: ["定位", "节电模式"],
      fold:false
    };
  },
  methods: {
    changeBtnStatus(name) {
      if (!this.disabled.includes(name)) {
        this.active.includes(name)
          ? this.active.splice(this.active.indexOf(name), 1)
          : this.active.push(name);
      }
    },
    mask2(ev) {
      var borderLayer = document.querySelector(".mask2");
      var x = ev.pageX;
      var y = ev.pageY;
      // console.log(ev)
      var bounding = borderLayer.getBoundingClientRect();
      borderLayer.style.webkitMaskPosition = `${x - bounding.x - 80}px ${
        y - bounding.y - 80
      }px`;

      var borderLayer1 = document.querySelector(".mask-layer");
      var x1 = ev.pageX;
      var y1 = ev.pageY;
      // console.log(ev)
      var bounding1 = borderLayer1.getBoundingClientRect();
      borderLayer1.style.webkitMaskPosition = `${x1 - bounding1.x - 80}px ${
        y1 - bounding1.y - 80
      }px`;
    },
    changeFold(){
        this.fold = !this.fold
    }
  },
  props: {
    width: Number,
    height: String,
    bottom: Number,
    right: Number,
  },
  components: { SystemBox },
};
</script>

<style lang="less">
@sliderColor: rgb(0, 120, 215);
.notice-box {
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  .tip {
    text-align: right;
  }
  .tip-title {
    cursor: default;
    color: rgb(155, 200, 234);
    font-size: 12px;
    &:hover {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  .wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: rgb(175, 177, 176);
    font-size: 16px;
  }

  .btn-group {
      transition: .5s;
      max-height: 100%;
      padding-bottom: 10px;
      box-sizing: border-box;

      &.fold {
          max-height: 100px;
      }

    .btn-wrap {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
      position: relative;

      .mask-layer {
        width: 100%;
        height: 100%;
        position: absolute;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0.1);
        z-index: 1;
        mask-image: radial-gradient(
          circle at center,
          white 0%,
          transparent 40px
        );
        mask-repeat: no-repeat;
        mask-size: 160px 160px;
        pointer-events: none;
        & div {
          height: 65px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-sizing: border-box;
        }
      }

      .btn-item {
        height: 65px;
        padding: 5px 2px;
        box-sizing: border-box;
        background-color: rgb(95, 95, 95);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 12px;
        border: 1px solid transparent;
        cursor: default;

        &:hover {
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        &.active {
          background-color: rgb(0, 119, 215);
        }

        &.disabled {
          color: gray;
        }
      }
    }
  }

  .light-setting {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 20px auto 0;
    position: relative;

    .mask2 {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);

      mask-image: radial-gradient(circle at center, white 0%, transparent 80px);
      mask-repeat: no-repeat;
      mask-size: 160px 160px;
      pointer-events: none;
    }

    span {
      font-size: 30px;
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
}
</style>