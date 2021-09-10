<template>
    <WinAppWrap :newWidth="newWidth" :newHeight="newHeight">
        <div class="browser">
            <div class="browser-toolbar">
                <div class="browser-toolbar-tabs">
                    <img :src="iconUrl" alt="">
                    <span>必应</span>
                    <span class="iconfont icon-cha"></span>
                </div>
                <div class="browser-toolbar-left">
                    <span class="iconfont icon-leftarrow" @click="go(-1)"></span>
                    <span class="iconfont icon-Rightarrow" @click="go(1)"></span>
                    <span class="iconfont icon-shuaxin"></span>
                </div>
                <div class="browser-toolbar-searchbar">
                    <span class="iconfont icon-suoding" title="查看网站信息"></span>
                    <input type="text" placeholder="请输入一个网址" :value="src" @keyup.enter="search($event)">
                    <span class="iconfont icon-ai64" title="为此标签页添加书签"></span>
                </div>
                <div class="browser-toolbar-right">
                    <span class="iconfont" title="Vue Devtools
可以访问此网站"><svg t="1630912449315" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20131" width="32" height="32"><path d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z" fill="#41B883" p-id="20132"></path><path d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z" fill="#34495E" p-id="20133"></path></svg></span>
                    <span class="iconfont icon-pintu" title="拓展程序"></span>
                    <span class="iconfont icon-gengduo-shuxiang" title="自定义及控制Google Chrome"></span>
                </div>
            </div>
            <div class="browser-body">
                <!-- 使用iframe存在一个bug：点击iframe部分无法获取焦点，层级太高超过div -->
                <iframe :src="src" frameborder="0"></iframe>
            </div>
        </div>
    </WinAppWrap>
</template>

<script>
import WinAppWrap from '@/components/WinAppWrap'

export default {
    data(){
        return {
            src: 'https://cn.bing.com/',
            newWidth: '1000px',
            newHeight: '800px',
            iconUrl: require('@/assets/biying.png')
        }
    },
    methods:{
        search(e){
            console.log(e.target.value)
            this.src = e.target.value
        },
        go(step){
            this.$router.go(step)
        }
    },
    components:{ WinAppWrap },
    provide: {
        iconUrl: "",
        headerName: '',
        bgColor: 'rgb(222,225,230)'
    }
}
</script>

<style lang="less">
    .browser {
        width: 100%;
        flex: 1;
        background-color: #fff;

        &-toolbar {
            display: flex;
            align-items: center;
            height: 40px;
            position: relative;

            &-tabs {
                position: absolute;
                background-color: #fff;
                width: 150px;
                padding: 0 10px 0 0;
                height: 30px;
                display: flex;
                align-items: center;
                top: -30px;
                left: 10px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                font-size: 12px;

                img {
                    width: 20px;
                    height: 20px;
                    margin: 0 5px;
                }

                span.iconfont {
                    font-size: 12px;
                    margin-left: auto;
                    border-radius: 50%;
                    padding: 2px;

                    &:hover {
                        background-color: rgb(230, 230, 230);
                    }
                }

                &::after{
                    content: "";
                    position: absolute;
                    top: 25px;
                    right: -5px;
                    width: 0;
                    height: 0;
                    // background-color: inherit;
                    border-bottom: 5px solid #fff;
                    border-right: 5px solid transparent;
                }

                &::before{
                    content: "";
                    position: absolute;
                    top: 25px;
                    left: -5px;
                    width: 0;
                    height: 0;
                    // background-color: inherit;
                    border-bottom: 5px solid #fff;
                    border-left: 5px solid transparent;
                }                
            }

            &-left {
                width: 100px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                span {
                    font-size: 1.3rem;
                    border-radius: 50%;
                    padding: 2px;
                    box-sizing: border-box;

                    &:hover {
                        background-color: rgb(230, 230, 230);
                    }
                }

                span:last-of-type {
                    font-size: 1.1rem;
                }
            }

            &-searchbar {
                flex: 1;
                position: relative;

                span.iconfont {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: .8rem;
                    padding: 10px;
                    border-radius: 50px;

                    &:hover {
                        background-color: rgb(230, 230, 230);
                    }
                }

                span:nth-of-type(2) {
                    right: 0;
                    font-size: 1.2rem;
                    padding: 7px;
                }

                input {
                    outline: none;
                    border: none;
                    background-color: rgb(241, 243, 244);
                    padding: 8px 35px;
                    box-sizing: border-box;
                    margin: 5px 0;
                    width: 100%;
                    border-radius: 50px;
                    font-size: 12px;
                }
            }

            &-right {
                width: 150px;
                height: 100%;
                padding-right: 5px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                span.iconfont {
                    padding: 10px;
                    border-radius: 50px;

                    &:nth-of-type(1) {
                        svg {
                            width: 16px;
                            height: 16px;
                        }
                    }

                    &:nth-of-type(2) {
                        color: rgb(95, 99, 140);
                    }

                    &:nth-of-type(3) {
                        color: #333;
                    }

                    &:hover {
                        background-color: rgb(230, 230, 230);
                    }
                }  
            }
        }

        &-body {
            height: 100%;
        }

        iframe{
            width: 100%;
            height: 100%;
        }
    }
</style>