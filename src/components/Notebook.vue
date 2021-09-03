<template>
    <div class="notebook" :style="{'width':width,'height':height}" ref="notebook">
        <div class="notebook-head" @mousedown="drag($event)">
            <div class="notebook-head-icon"><img :src="icon" alt=""></div>
            <div class="notebook-head-name">新建文本文档.txt - 记事本</div>
            <div class="notebook-head-right">
                <span class="iconfont icon-zuixiaohua" title="最小化"></span>
                <span class="iconfont" @click="maxSize" :class="isMax ? 'icon-zuidahua':'icon-window-maximize'" :title="isMax ? '向下还原':'最大化'"></span>
                <span class="iconfont icon-cha" title="关闭"></span>
            </div>
        </div>
        <div class="notebook-toolbar">
            <div class="notebook-toolbar-item" v-for="item in toolbar" :key="item.code">{{item.text}}(<span>{{item.code}}</span>)</div>
        </div>
        <div class="notebook-content" contenteditable></div>
        <div class="notebook-footer">
            <div class="notebook-footer-item">UTF-8</div>
            <div class="notebook-footer-item">Windows(CRLF)</div>
            <div class="notebook-footer-item">100%</div>
            <div class="notebook-footer-item">Ln 1, Col 1</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            icon: require('@/assets/记事本icon.png'),
            toolbar: [{text:'文件',code:'F'},{text:'编辑',code:'E'},{text:'格式',code:'O'},{text:'查看',code:'V'},{text:'帮助',code:'H'}],
            width: '800px',
            height: '500px',
            isMax: false
        }
    },
    methods: {
        maxSize(){
            if(!this.isMax){
                this.width = '100%'
                this.height = '100%'
                this.$refs.notebook.style.left = '50%'
                this.$refs.notebook.style.top = '50%'
                this.isMax = true
            }else{
                this.width = '800px'
                this.height = '500px'
                this.isMax = false
            }
        },
        drag(e){
            let moveBox = this.$refs['notebook']
            let moveTitle = e.target
            let { clientX,clientY } = e
            let objX,objY

            // 只允许左键
            if(e.button !== 0)
                return ;
            
            objX = moveBox.offsetLeft
            objY = moveBox.offsetTop
            moveBox.style.transition = '0s'
            moveTitle.style.cursor = 'move' 

            document.onmousemove = (event) => {             
                if(moveBox.getBoundingClientRect().top <= 0){
                    if(this.isMax)
                        return ;
                    this.width = '100%'
                    this.height = '100%'
                    this.$refs.notebook.style.left = '50%'
                    this.$refs.notebook.style.top = '50%'
                    this.isMax = true
                    return ;
                }                                
                moveBox.style.left = (event.clientX - clientX + objX) + 'px'
                moveBox.style.top = (event.clientY - clientY + objY) + 'px'
            }

            document.onmouseup = () => {
                document.onmousemove = null
                moveTitle.style.cursor = 'default'
                moveBox.style.transition = '.2s'
            }
        }
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
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        transition: .2s;

        &-head {
            display: flex;
            align-items: center;
            height: 30px;
            font-size: 12px;
            cursor: default;
            user-select: none;

            &-icon img{
                width: 20px;
                height: 25px;
                margin: 3px 5px 0 5px;
            }

            &-right {
                margin-left: auto;
                height: 100%;

                span {
                    display: inline-block;
                    padding: 8px 15px;
                    font-size: 12px;

                    &:hover {
                        background-color: rgb(229, 229, 229);
                    }
                }
            }
        }

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
                &:nth-of-type(3){
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