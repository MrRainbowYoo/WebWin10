<template>
    <div class="system-box" 
    :style="{width:width+'px',height:height+'px',bottom:bottom+'px',left:left+'px'}" 
    :class="{'needPadding':padding}"
    @click.stop>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"SystemBox",
    data(){
        return {}
    },
    props:{
        width:Number,
        height:Number,
        bottom:Number,
        left:Number,
        padding:{
            default:true,
            type:Boolean
        }
    }
}
</script>

<style lang="less">
    @boxbg: linear-gradient(45deg ,rgb(60,60,60),rgb(57,57,57),rgb(60,60,60));
    @sliderColor: rgb(0,120,215);

    .system-box {
        background: @boxbg;
        color: #fff;
        box-sizing: border-box;
        // padding: 10px;
        display: flex;
        flex-direction: column;
        text-align: left;
        font-size: 14px;
        position: absolute;
        transform: translateX(-50%);
    }

    .needPadding{
        padding: 10px;
    }
</style>