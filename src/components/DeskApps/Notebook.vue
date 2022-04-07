<template>
    <WinAppWrap >
        <div class="notebook">
            <div class="notebook-toolbar">
                <div class="notebook-toolbar-item" v-for="item in toolbar" :key="item.code">{{item.text}}(<span>{{item.code}}</span>)</div>
            </div>
            <div class="notebook-content" contenteditable autofocus></div>
            <div class="notebook-footer">
                <div class="notebook-footer-item">UTF-8</div>
                <div class="notebook-footer-item">Windows(CRLF)</div>
                <div class="notebook-footer-item">100%</div>
                <div class="notebook-footer-item">Ln 1, Col 1</div>
            </div>
        </div>        
    </WinAppWrap>
</template>

<script>
import WinAppWrap from '@/components/WinAppWrap'

export default {
    data(){
        return {
            toolbar: [{text:'文件',code:'F'},{text:'编辑',code:'E'},{text:'格式',code:'O'},{text:'查看',code:'V'},{text:'帮助',code:'H'}],
        }
    },
    components: { WinAppWrap },
    provide: {
        iconUrl: require('@/assets/记事本icon.png'),
        headerName: '新建文本文档.txt - 记事本'
    }
}
</script>

<style lang="less">
    @footerBorder: 1px solid rgba(0,0,0,.2);
    .notebook {
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        // position: absolute;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%,-50%);
        // transition: .2s;
        flex: 1;

        &-toolbar {
            display: flex;
            font-size: 12px;
            cursor: default;
            border-bottom: 1px solid rgba(0, 0, 0,  .1);
            user-select: none;

            &-item {
                padding: 2px 5px;

                span {
                    text-decoration: underline;
                }

                &:hover {
                    background-color: rgb(229, 243, 255);
                }
            }
        }

        &-content {
            padding: 0 3px;
            text-align: left;
            outline: none;
            flex: 1;
            overflow-y: scroll;
            font-family: simsun;
            word-wrap: break-all;
        }

        &-footer {
            height: 20px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            font-size: 12px;
            background-color: rgb(240, 240, 240);
            text-align: left;
            box-sizing: border-box;
            border-top: 1px solid rgba(0, 0, 0, .1);

            &-item {
                height: 100%;
                line-height: 20px;
                padding: 0 .6rem;

                &:nth-of-type(1){
                    width: 10%;
                }
                &:nth-of-type(2){
                    border-left: @footerBorder;
                    border-right: @footerBorder;
                }

                &:nth-of-type(4){
                    width: 20%;
                    border-left: @footerBorder;
                    border-right: @footerBorder;
                }
            }
        }
    }
</style>