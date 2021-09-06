<template>
    <div class="winapp-wrap" 
        :style="{'width':width,'height':height}" 
        ref="winappwrap" 
        v-drag="{setMax,isMax}"
        @mousedown.stop="changeZIndex($event)" 
    >
        <WinAppHeader @setMax="setMax()"  @closeApp="closeApp()" @hiddenApp="hiddenApp()" :isMax="isMax"/>
        <slot></slot>
    </div>
</template>

<script>
import WinAppHeader from './WinAppHeader.vue'

export default {
    data(){
        return {
            width: '800px',
            height: '500px',
            isMax: false,
            initialWidth: '800px',
            initialHeight: '500px'
        }
    },
    props:{
        newWidth: String,
        newHeight: String
    },
    created(){
        if(this.newWidth){
            this.width = this.newWidth
            this.height = this.newHeight
            this.initialWidth = this.newWidth
            this.initialHeight = this.newHeight
        }
    },
    methods: {
        setMax(type='in'){
            switch(type){
                case 'in':
                    if(!this.isMax){
                        this.width = '100%'
                        this.height = '100%'
                        this.$refs.winappwrap.style.left = '50%'
                        this.$refs.winappwrap.style.top = '50%'
                        this.isMax = true
                    }else{
                        this.width = this.initialWidth
                        this.height = this.initialHeight
                        this.isMax = false
                    }
                    break;
                case 'out':
                    this.width = '100%'
                    this.height = '100%'
                    this.$refs.winappwrap.style.left = '50%'
                    this.$refs.winappwrap.style.top = '50%'
                    this.isMax = true
                    break;
            }
        },
        changeZIndex(e){
            this.$store.commit('changeZIndex')
            e.currentTarget.style.zIndex = this.zIndex
            this.$store.commit('changeFocusApp',e.currentTarget.getAttribute('data-id'))
        },
        closeApp(){
            let openApps = this.openApps
            let id = this.$refs.winappwrap.getAttribute('data-id')
            for(let i=0;i<openApps.length;i++){
                if(openApps[i].id == id){
                    openApps.splice(i,1)
                    break;
                }
            }
            this.$store.commit('changeOpenApps',openApps)
        },
        hiddenApp(){
            // this.$refs.winappwrap.style.opacity = '0'
            this.$refs.winappwrap.style.display = 'none'
            this.$store.commit('changeFocusApp',0)
        }
    },
    components: { WinAppHeader },
    computed:{
        zIndex(){
            return this.$store.state.zIndex
        },
        openApps(){
            return this.$store.state.openApps
        }
    }
}
</script>

<style lang="less">
.winapp-wrap{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: .2s;
    z-index: 0;
    box-shadow: 0px 0px 5px 5px rgb(0 0 0 / 20%);
}
</style>