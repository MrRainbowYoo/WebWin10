<template>
  <SystemBox :width="width" :height="height" :bottom="bottom" :right="right">
    <div class="box-head">
      <span class="iconfont icon-iconset0251"> 80%</span>
    </div>
    <div class="box-body">
      <span>电源模式：{{ cell | cellMode }}</span>
      <el-slider
        v-model="cell"
        :step="50"
        show-stops
        :show-tooltip="showTooltip"
      >
      </el-slider>
      <span
        style="
          float: left;
          marginTop: 5px;
          fontSize: 12px;
          color: rgb(160, 159, 159);
        "
        >最长续航</span
      >
      <span
        style="
          float: right;
          marginTop: 5px;
          fontSize: 12px;
          color: rgb(160, 159, 159);
        "
        >最佳性能</span
      >
    </div>
    <div class="box-footer">
      <span>电池设置</span>
    </div>
  </SystemBox>
</template>

<script>
import SystemBox from "@/components/WinBoxes/SystemBox";

export default {
  name: "CellBox",
  data() {
    return {
      cell: 100,
      showTooltip: false,
    };
  },
  props: {
    width: Number,
    height: String,
    bottom: Number,
    right: String,
  },
  filters: {
    cellMode(cell) {
      const mode = ["更长的续航", "更好的性能", "更佳性能"];
      const index = cell / 50;
      return mode[index];
    },
  },
  components: {
    SystemBox,
  },
};
</script>

<style lang="less">
    @sliderColor: rgb(0, 120, 215);

    .box-head {
    margin-bottom: 20px;
    span {
        font-size: 50px;
        cursor: default;
        font-weight: 200;
    }
    }

    .box-body {
    flex: 1;

    .el-slider:hover {
        .el-slider__button {
        background-color: #fff;
        }
    }

    .el-slider__bar {
        background-color: @sliderColor;
    }

    .el-slider__button {
        width: 8px;
        height: 20px;
        border: none;
        border-radius: 10px;
        background-color: @sliderColor;
        transition: 0;
    }

    .el-slider__runway {
        background-color: rgb(176, 176, 176);
    }

    .el-slider__stop {
        top: 20px;
        height: 6px;
        width: 1px;
    }

    .el-slider {
        position: relative;

        &::before {
        content: "";
        position: absolute;
        height: 6px;
        width: 2px;
        background-color: rgb(131, 131, 131);
        top: 20px;
        right: 0;
        }

        &::after {
        content: "";
        position: absolute;
        height: 6px;
        width: 2px;
        background-color: rgb(131, 131, 131);
        top: 20px;
        left: 0;
        }
    }
    }

    .box-footer {
    span {
        color: rgb(166, 216, 255);
        cursor: pointer;

        &:hover {
        color: rgb(160, 159, 159);
        }
    }
    }
</style>