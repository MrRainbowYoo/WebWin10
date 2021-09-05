<template>
  <div class="app-icon" @dblclick="openApp($event)">
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
                openApps.push(app)
                this.$store.commit('changeOpenApps',openApps)
                this.$store.commit('changeFocusApp',id)
                break;
            }

            this.$nextTick(()=>{
                let apps = [...document.querySelectorAll('.winapp-wrap')]
                let length = apps.length
                let currentApp = apps[length-1]
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