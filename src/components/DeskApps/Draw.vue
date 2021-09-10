<template>
    <WinAppWrap :newWidth="newWidth" :newHeight="newHeight" @windowStatus="changeCanvasSize">
        <div class="canvas-wrap">
            <canvas ref="canvas" 
                width="800" 
                height="500" 
                @mousedown="mouseDown($event)" 
                @mousemove="mouseMove($event)" 
                @mouseup="mouseUp()"
            >您的浏览器不支持canvas</canvas>
        </div>
        <div class="tools-wrap"></div>
    </WinAppWrap>
</template>

<script>
import WinAppWrap from '@/components/WinAppWrap'

export default {
    data(){
        return {
            newWidth: '1000px',
            newHeight: '800px',
            context: {},
            isDrawing: false,
            movePos: {},
            config: {
                strokeStyle: 'red',
                lineWidth: 1
            },
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
            canvas.height = data.height - 30
            this.context.putImageData(canvasData,0,0)
        },
        initCanvas() {
            const canvas = this.$refs.canvas
            this.context = canvas.getContext('2d')
            this.context.strokeStyle = this.config.strokeStyle
            this.context.lineWidth = this.config.lineWidth
            this.context.save()
            // this.context.lineCap = 'round'
            // this.context.lineJoin = 'round'
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
        canvas {
            background-color: #fff; 
        }
    }
</style>