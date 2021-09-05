<template>
    <div class="winapp-wrap" 
        :style="{'width':width,'height':height}" 
        ref="winappwrap" 
        v-drag="{setMax,isMax}"
        @mousedown.stop="changeZIndex($event)" 
    >
        <WinAppHeader @setMax="setMax()" :isMax="isMax"/>
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
                        this.width = '800px'
                        this.height = '500px'
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
            console.log(e.currentTarget)
        }
    },
    components: { WinAppHeader },
    computed:{
        zIndex(){
            return this.$store.state.zIndex
        },
        // initialPos(){
        //     // 生成 [30,60] 随机数
        //     let left = parseInt(Math.random()*60,10) + 30;
        //     let top = parseInt(Math.random()*60,10) + 30;
        //     return [left+'%',top+'%']
        // }
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
}
</style>