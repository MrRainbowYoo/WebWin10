<template>
  <div class="app-icon" @dblclick="openApp($event)" :title="name">
      <img :src="imgUrl" alt="">
      <p>{{name}}</p>
  </div>
</template>

<script>
export default {
    props:{
        imgUrl:String,
        name:String
    },
    methods: {
        openApp(e){
            let app,appName = e.currentTarget.querySelector('p').innerHTML
            let openApps = this.openApps
            let id = new Date().getTime()
            // console.log(appName,openApps,id)
            switch(appName){
                case '记事本':
                    app = {
                        name:'Notebook',
                        iconUrl: require('@/assets/记事本icon.png'),
                        id
                    }
                    break;
                case 'Google Chrome':
                    app = {
                        name: 'Browser',
                        iconUrl:  require('@/assets/chrome.png'),
                        id
                    }
                    break;
                case 'Vscode':
                    app = {
                        name: 'Vscode',
                        iconUrl: require('@/assets/vscode.png'),
                        id
                    }
                    break;
                case '画图':
                    app = {
                        name: 'Draw',
                        iconUrl: require('@/assets/draw.png'),
                        id
                    }
                    break;
                case '小陈音乐':
                    app = {
                        name: 'Music',
                        iconUrl:require('@/assets/音乐.png'),
                        id
                    }
                    break;
                case '聊天室':
                    app = {
                        name: 'Chatroom',
                        iconUrl:require('@/assets/chatroom.png'),
                        id
                    }
                    break;
                default:
                    this.$message({
                        type:'info',
                        message:'Coming Soon',
                        showClose:true
                    })
                    return ;
            }
            openApps.push(app)
            this.$store.commit('changeOpenApps',openApps)
            this.$store.commit('changeFocusApp',id)
            
            this.$nextTick(()=>{
                let apps = [...document.querySelectorAll('.winapp-wrap')]
                let currentApp = apps.filter(item => item.getAttribute('data-id') == id)[0]
                this.$store.commit('changeZIndex')
                currentApp.style.zIndex = this.zIndex
            })

        }
    },
    computed:{
        openApps(){
            return this.$store.state.openApps
        },
        zIndex(){
            return this.$store.state.zIndex
        }
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