<template>
    <SystemBox :width="width" :height="height" :bottom="bottom" :left="left" :padding=needPadding>
        <div class="scroll-wrap">
            <div class="wifi-item">
                <div class="item-left iconfont icon-dianhua" style="transform:rotate(90deg);marginTop:5px;marginRight:5px"></div>
                <div class="item-right">宽带连接</div>
            </div>
            <div class="wifi-item" 
                v-for="(item,index) in wifis" 
                :key="index" 
                :class="{'selected':item.id === selectedWifi}"
                @click="changeWifi(item.id)"
            >
                <div class="item-left iconfont icon-wuxianwifi"></div>
                <div class="item-right">
                    <div class="wifi-name">{{item.name}}</div>
                    <div class="wifi-safe">{{item.status}}</div>
                    <div class="wifi-property" v-if="item.id === selectedWifi && item.id === connectedWifi">属性</div>
                    <div class="wifi-auto" v-if="item.id !== connectedWifi && item.id === selectedWifi">
                        <input type="checkbox" id="auto">
                        <label for="auto">自动连接</label>
                    </div>
                    <div class="wifi-btn" v-if="item.id === selectedWifi">{{item.id === connectedWifi ? '断开连接':'连接'}}</div>
                </div>
            </div>
        </div>
    </SystemBox>
</template>

<script>
import SystemBox from '@/components/SystemBox'

export default {
    name:"WifiBox",
    data(){
        return {
            needPadding:false,
            wifis: [
                {id:0,name:'TP-LINK_666',status:'已连接，安全'},
                {id:1,name:'TP-LINK_888',status:'安全'},
                {id:2,name:'TP-LINK_777',status:'安全'},
                {id:3,name:'TP-LINK_988',status:'安全'},
                {id:4,name:'TP-LINK_988',status:'安全'},
            ],
            selectedWifi:0,
            connectedWifi:0
        }
    },
    methods:{
        changeWifi(id){
            this.selectedWifi = id
        }
    },
    props:{
        width:Number,
        height:Number,
        bottom:Number,
        left:Number,
    },
    components:{
        SystemBox
    }
}
</script>

<style lang="less">
    .scroll-wrap {
        max-height: 80%;
        overflow-y: scroll;
    }

    @keyframes clq {
        from{
            transform: scale(.9);
        }
        to{
            transform: scale(1);
        }
    }

    .wifi-item {
        display: flex;
        align-items: flex-start;
        padding: 15px;
        cursor: default;

        &.selected {
            background-color: rgb(16, 88, 145);

            &.selected:hover {
                background-color: rgb(24, 125, 207);

                .wifi-btn {
                    background-color: rgba(63, 121, 166, 1);
                }
            }

            &.selected>div {
                animation: clq .1s forwards;
            }
        }

        &:hover:not(.selected) {
            background-color: rgba(255, 255, 255, .2);
        }

        .item-left {
            width: 40px;
            font-size: 25px;
        }

        .item-right {
            flex: 1;

            .wifi-safe {
                color: rgb(159, 188, 211);
            }

            .wifi-property {
                margin: 10px 0;
                color: rgb(159, 188, 211);
                font-size: 14px;
                text-decoration: underline;
                cursor: pointer;
            }

            .wifi-auto {
                margin: 10px 0;

                input {
                    display: none;
                }

                input:checked+label::before {
                    content: "✔";
                }

                label {
                    position: relative;
                }

                label:hover {
                    &::before {
                        border: 1px solid #fff;
                    }
                }

                label::before {
                    content: "";
                    width: 16px;
                    height: 16px;
                    border: 1px solid rgb(159, 188, 211);
                    box-sizing: border-box;
                    display: inline-block;
                    margin-right: 10px;
                    vertical-align: bottom;
                    background-color: transparent;
                    line-height: 16px;
                    text-align: center;
                }
            }

            .wifi-btn {
                width: 50%;
                background-color: rgba(63,121,166,.8);
                text-align: center;
                padding: 8px 0;
                float: right;
                border: 3px solid transparent;
                box-sizing: border-box;

                &:hover {
                    border: 3px solid rgba(255, 255, 255, .5);
                }
            }
        }
    }
</style>