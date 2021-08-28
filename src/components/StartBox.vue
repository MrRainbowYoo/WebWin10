<template>
  <SystemBox
    :width="width"
    :height="height"
    :bottom="bottom"
    :right="right"
    :padding="needPadding"
  >
    <div class="start-box">
      <div class="start-float">
        <div class="start-item">
          <span class="iconfont icon-wuxianwifi"></span>
          <span class="item-name">开始</span>
        </div>
        <div class="start-item">
          <span class="iconfont icon-wuxianwifi"></span>
          <span class="item-name">Admin</span>
        </div>
        <div class="start-item">
          <span class="iconfont icon-wuxianwifi"></span>
          <span class="item-name">文档</span>
        </div>
        <div class="start-item">
          <span class="iconfont icon-wuxianwifi"></span>
          <span class="item-name">图片</span>
        </div>
        <div class="start-item">
          <span class="iconfont icon-wuxianwifi"></span>
          <span class="item-name">设置</span>
        </div>
        <div class="start-item">
          <span class="iconfont icon-wuxianwifi"></span>
          <span class="item-name">电源</span>
        </div>
      </div>
      <div class="start-wrap">
        <div class="start-folders">
          <MyTree :treeData="treeData"></MyTree>
        </div>
        <div class="start-right">
          <div class="right-top">
            <div class="right-item">
              <img :src="iconImg" alt="" />
              <div>运行</div>
            </div>
            <div class="right-item">
              <img :src="iconImg" alt="" />
              <div>任务管理器</div>
            </div>
            <div class="right-item">
              <img :src="iconImg" alt="" />
              <div>命令提示符</div>
            </div>
            <div class="right-item">
              <img :src="iconImg" alt="" />
              <div>控制面板</div>
            </div>

            <div class="right-item">
              <img :src="iconImg" alt="" />
              <div>控制面板</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SystemBox>
</template>

<script>
import SystemBox from "@/components/SystemBox";
import MyTree from "@/components/MyTree";
import treeData from '@/assets/winFiles.js'

export default {
  name: "StartBox",
  data() {
    return {
      needPadding: false,
      iconImg: require("@/assets/文档.png"),
      treeData: treeData
    };
  },
  methods: {},
  props: {
    width: Number,
    height: String,
    bottom: Number,
    right: String,
  },
  components: { SystemBox, MyTree },
};
</script>

<style lang="less">
@itemHeight: 50px;

.start-box {
  position: relative;
  padding-top: 5px;
  height: 100%;

  .start-float {
    padding-top: 5px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: @itemHeight;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.3s;

    & .start-item:nth-of-type(1) {
      margin-bottom: auto;
    }

    &:hover {
      width: 200px;
      box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.3);
      background-color: rgba(45, 45, 45, 1);

      .start-item {
        width: 200px;
      }
    }

    .start-item {
      height: @itemHeight;
      line-height: @itemHeight;
      width: @itemHeight;
      overflow: hidden;
      color: #fff;
      cursor: default;
      transition: 0.3s;

      span.iconfont {
        display: inline-block;
        width: @itemHeight;
        text-align: center;
      }

      &:hover {
        background-color: rgb(87, 88, 89);
      }
    }
  }

  .start-wrap {
    padding-left: @itemHeight + 20px;
    height: 100%;
    display: flex;

    .start-folders {
      width: 40%;
      height: 100%;
      padding-right: 10px;
      overflow-y: hidden;

      &:hover {
        overflow: overlay;
      }

      &::-webkit-scrollbar {
        width: 2px;
        height: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgb(165, 169, 173);
      }
    }

    .start-right {
      flex: 1;
      padding: 5px;

      .right-top {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
      }

      .right-item {
        width: 100%;
        box-sizing: border-box;
        background-color: rgb(0, 120, 215);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 0;
        padding-bottom: 100%;
        position: relative;
        border: 1px solid transparent;
        box-sizing: border-box;
        cursor: default;

        &:hover {
          border: 1px solid #fff;
          background-color: rgb(24, 146, 245);
        }

        &:last-of-type {
          grid: 3/2;
        }

        img {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        div {
          font-size: 12px;
          text-align: left;
          margin-top: 5px;
          position: absolute;
          bottom: 5px;
          left: 5px;
        }
      }
    }
  }
}
</style>