<template>
    <div class="winapp-header" :style="{'background':bgColor}">
        <div class="winapp-header-icon"><img :src="iconUrl" alt=""></div>
        <div class="winapp-header-name">{{headerName}}</div>
        <div class="winapp-header-right">
            <span class="iconfont icon-zuixiaohua" title="最小化" @click="fatherHidden()"></span>
            <span class="iconfont" @click="fatherMax()" :class="isMax ? 'icon-zuidahua':'icon-window-maximize'" :title="isMax ? '向下还原':'最大化'"></span>
            <span class="iconfont icon-cha" title="关闭" @click="fatherClose()"></span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            iconUrl: this.iconUrl,
            headerName: this.headerName,
            bgColor: this.bgColor
        }
    },
    props: {
        isMax: {
            type: Boolean,
            default: false
        },
    },
    inject: {
        iconUrl:{},
        headerName:{},
        bgColor:{
            default: '#fff'
        }
    },
    methods: {
        fatherMax(){
            this.$emit('setMax')
        },
        fatherClose(){
            this.$emit('closeApp')
        },
        fatherHidden(){
            this.$emit('hiddenApp')
        }
    }
}
</script>

<style lang="less">
    .winapp-header {
        width: 100%;
        height: 30px;
        font-size: 12px;
        display: flex;
        align-items: center;
        cursor: default;
        user-select: none;

        &-icon img{
            width: 20px;
            // height: 25px;
            margin: 3px 5px 0 5px;
        }

        &-right {
            margin-left: auto;
            height: 100%;

            span {
                display: inline-block;
                padding: 8px 15px;
                font-size: 12px;

                &:hover:not(:last-of-type) {
                    background-color: rgb(229, 229, 229);
                }

                &:last-of-type:hover {
                    background-color: rgb(232, 17, 35);
                    color: #fff;
                }                
            }
        }
    }
</style>