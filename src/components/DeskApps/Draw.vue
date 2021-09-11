<template>
    <WinAppWrap :newWidth="newWidth" :newHeight="newHeight" :wrapName="wrapName" @windowStatus="changeCanvasSize">
        <div class="canvas-wrap">
            <canvas ref="canvas" 
                width="1000" 
                height="716" 
                @mousedown="mouseDown($event)" 
                @mousemove="mouseMove($event)" 
                @mouseup="mouseUp()"
            >您的浏览器不支持canvas</canvas>
        </div>
        <div class="tools-wrap">
            <div class="color-wrap">
                <div class="color-item" 
                v-for="(item,index) in colors" :key="index" 
                :style="{'background':item}"
                :class="{'activeColor':index === activeColor}" 
                @click="changeColor(index)"
                ></div>
            </div>
        </div>
    </WinAppWrap>
</template>

<script>
import WinAppWrap from '@/components/WinAppWrap'

export default {
    data(){
        return {
            newWidth: '1000px',
            newHeight: '800px',
            wrapName: 'draw',
            context: {},
            isDrawing: false,
            movePos: {},
            config: {
                strokeStyle: '#000000',
                lineWidth: 10
            },
            colors: ['#000000','#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#f1c40f','#e74c3c','#95a5a6','#d35400'],
            activeColor: 0
        }
    },
    components: { WinAppWrap },
    provide: {
        iconUrl: require('@/assets/draw.png'),
        headerName:'画图',
        bgColor: 'rgb(232 227 227)'
    },
    mounted(){
        this.initCanvas()
    },
    methods: {
        changeCanvasSize(data){
            let canvas = this.$refs.canvas
            let canvasData = this.context.getImageData(0,0,canvas.width,canvas.height)
            canvas.width = data.width
            canvas.height = data.height - 30 - 50
            this.context.putImageData(canvasData,0,0)
        },
        changeColor(index){
            this.activeColor = index
            this.context.strokeStyle = this.colors[index]
        },
        initCanvas() {
            const canvas = this.$refs.canvas
            this.context = canvas.getContext('2d')
            this.context.strokeStyle = this.config.strokeStyle
            this.context.lineWidth = this.config.lineWidth
            this.context.lineCap = 'round'
            this.context.lineJoin = 'round'
            this.context.save()
        },
        mouseDown(e) {
            this.isDrawing = true
            this.context.beginPath()
            this.context.moveTo(e.offsetX,e.offsetY)
        },
        mouseMove(e){
            if(this.isDrawing){
                this.drawing(e.offsetX,e.offsetY)
            }
        },
        mouseUp(){
            this.isDrawing = false
        },
        drawing(x,y){
            this.context.lineTo(x,y)
            this.context.stroke()
            this.context.save()
        }  
    }
}
</script>

<style lang='less'>
    .canvas-wrap{
        flex: 1;
        background-color: #fff;

        canvas {
            background-color: #fff; 
        }
    }

    .tools-wrap {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 80%;
        height: 50px;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, .2);
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .color-wrap {
            display: flex;
            width: 80%;

            .color-item {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 10px;
                transition: .5s;
                cursor: pointer;
                position: relative;

                &:hover {
                    transform: scale(1.5);
                }
            }

            .activeColor::before {
                content: "";
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translate(-50%);
                
                border: 5px solid transparent;
                border-top: 5px solid #95a5a6;
            }            
        }

    }    
</style>