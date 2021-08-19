<template>
  <div class="app-icon">
      <img :src="imgUrl" alt="">
      <p>{{name}}</p>
  </div>
</template>

<script>
export default {
    props:{
        imgUrl:String,
        name:String
    }
}
</script>

<style scoped lang="less">
    @iconSize: 80px;

    .app-icon {
        width: @iconSize;
        height: @iconSize;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        box-sizing: border-box;
        cursor: default;
        margin-right: 5px;
        margin-bottom: 15px;

        p {
            width: 70%;
            font-size: 12px;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        img {
            width: 50%;
            height: 50%;
        }
    }

    .app-icon:hover {
        border: 1px solid rgba(255, 255, 255, .3);
        background-color: rgba(255, 255, 255, .1);
    }
</style>