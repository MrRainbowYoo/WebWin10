<template>
  <div class="app-wrap">
    <AppIcon :imgUrl="apps[0].imgUrl" :name="apps[0].name"></AppIcon>
    <AppIcon :imgUrl="apps[1].imgUrl" :name="apps[1].name"></AppIcon>
    <AppIcon :imgUrl="apps[2].imgUrl" :name="apps[2].name"></AppIcon>
    <AppIcon :imgUrl="apps[3].imgUrl" :name="apps[3].name"></AppIcon>
    <AppIcon :imgUrl="apps[4].imgUrl" :name="apps[4].name"></AppIcon>
    <AppIcon :imgUrl="apps[5].imgUrl" :name="apps[5].name"></AppIcon>
    <AppIcon :imgUrl="apps[6].imgUrl" :name="apps[6].name"></AppIcon>
    <AppIcon :imgUrl="apps[7].imgUrl" :name="apps[7].name"></AppIcon>
    <AppIcon :imgUrl="apps[8].imgUrl" :name="apps[8].name"></AppIcon>      
    <AppIcon :imgUrl="apps[9].imgUrl" :name="apps[9].name"></AppIcon>
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
                imgUrl: require('@/assets/我的文档.png'),
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
            },
            {
                imgUrl:require('@/assets/记事本.png'),
                name:'记事本'
            },
            {
                imgUrl:require('@/assets/chrome.png'),
                name: 'Google Chrome'
            },
            {
                imgUrl:require('@/assets/vscode.png'),
                name: 'Vscode'
            },
            {
                imgUrl:require('@/assets/draw.png'),
                name: '画图'
            },
            {
                imgUrl:require('@/assets/音乐.png'),
                name: '小陈音乐'
            },
            {
                imgUrl:require('@/assets/chatroom.png'),
                name:'聊天室'
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