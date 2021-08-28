<template>
  <div class="app-wrap">
    <AppIcon :imgUrl="apps[0].imgUrl" :name="apps[0].name"></AppIcon>
    <AppIcon :imgUrl="apps[1].imgUrl" :name="apps[1].name"></AppIcon>
    <AppIcon :imgUrl="apps[2].imgUrl" :name="apps[2].name"></AppIcon>
    <AppIcon :imgUrl="apps[3].imgUrl" :name="apps[3].name"></AppIcon>
    <AppIcon :imgUrl="apps[0].imgUrl" :name="apps[0].name"></AppIcon>
    <AppIcon :imgUrl="apps[0].imgUrl" :name="apps[0].name"></AppIcon>
    <AppIcon :imgUrl="apps[0].imgUrl" :name="apps[0].name"></AppIcon>
    <AppIcon :imgUrl="apps[0].imgUrl" :name="apps[0].name"></AppIcon>
    <AppIcon :imgUrl="apps[0].imgUrl" :name="apps[0].name"></AppIcon>      
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon'

export default {
    data(){
        return{
            apps:[
            {
                imgUrl:require('@/assets/Hotpot.png'),
                name:'我的文档'
            },
            {
                imgUrl:require('@/assets/电脑.png'),
                name:'此电脑'
            },
            {
                imgUrl:require('@/assets/网络.png'),
                name:'网络'
            },
            {
                imgUrl:require('@/assets/回收站.png'),
                name:'回收站'
            }]
        }
    },
    components:{
        AppIcon
    }
}
</script>

<style lang="less" scoped>
    /* 可解决flex使用column排列并换行时，父元素的宽度没有随着换行被撑开的bug
        .wrap{
            flex-direction:row;
            writing-mode:vertical-lr;
        }
        .item {
            writing-mode:horizontal-tb;
        }
    */
    .app-wrap {
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        writing-mode: vertical-lr; 

        .app-icon {
            writing-mode: horizontal-tb;
        }
    }
</style>>