<template>
  <div class="task-app">
      <img :src="src1" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return {
            src1: require('@/assets/文档.png')
        }
    }
}
</script>

<style lang="less" scoped>
    .task-app {
        width: 50px;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        &::before{
            content: "";
            width: 70%;
            height: 4px;
            background-color: rgb(118, 185, 237);
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            transition: .3s;
        }

        &:hover::before{
            width: 100%;
        }
    }
</style>>