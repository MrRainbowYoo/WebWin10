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
            <div class="other-wrap">
                <img :src="eraserUrl" alt="" @click="eraser">
                <img :src="trashUrl" alt="" @click="clearCanvas">
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
            activeColor: 0,
            eraserUrl: require('@/assets/eraser.png'),
            trashUrl: require('@/assets/trash.png'),
            points: []
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
            this.changeCanvasConfig()
        },
        changeColor(index){
            this.activeColor = index
            this.config.strokeStyle = this.colors[index]
            this.changeCanvasConfig()
            this.$refs.canvas.style.cursor = 'url(https://5fou.com/i/2021/09/12/m2y5t7.ico),auto'
        },
        changeCanvasConfig(){
            this.context.strokeStyle = this.config.strokeStyle
            this.context.lineWidth = this.config.lineWidth
            this.context.lineCap = 'round'
            this.context.lineJoin = 'round'
        },
        eraser(){
            this.context.strokeStyle = '#fff'
            this.context.lineWidth = 50
            this.$refs.canvas.style.cursor = 'url(https://5fou.com/i/2021/09/12/n9fmty.ico),auto'
        },
        clearCanvas(){
            let canvas = this.$refs.canvas
            this.context.clearRect(0,0,canvas.width,canvas.height)
        },
        initCanvas() {
            const canvas = this.$refs.canvas
            this.context = canvas.getContext('2d')
            this.changeCanvasConfig()
            this.context.save()
        },
        mouseDown(e) {
            this.isDrawing = true
            this.context.beginPath()
            // this.context.moveTo(e.offsetX,e.offsetY)
            this.points.push({x:e.offsetX,y:e.offsetY})
        },
        mouseMove(e){
            if(this.isDrawing){
                this.newDrawing(e.offsetX,e.offsetY)
            }            
        },
        mouseUp(){
            this.isDrawing = false
            this.points.length =0
        },
        drawing(x,y){
            this.context.lineTo(x,y)
            this.context.stroke()
            this.context.save()
        },
        newDrawing(x,y){
            this.points.push({x,y})
            let newX = (this.points[this.points.length-2].x + this.points[this.points.length-1].x) / 2
            let newY = (this.points[this.points.length-2].y + this.points[this.points.length-1].y) / 2
            if(this.points.length == 2){
                this.context.moveTo(this.points[this.points.length-2].x,this.points[this.points.length-2].y)
                this.context.lineTo(newX,newY)
            }else {
                let lastX = (this.points[this.points.length-3].x + this.points[this.points.length-2].x) / 2
                let lastY = (this.points[this.points.length-3].y + this.points[this.points.length-2].y) / 2
                this.context.moveTo(lastX,lastY)
                this.context.quadraticCurveTo(this.points[this.points.length - 2].x, this.points[this.points.length - 2].y, newX, newY);
            }
            this.context.stroke()
            this.points.slice(0,1)
            this.context.save()
        }            
    }
}
</script>

<style lang='less'>
    .canvas-wrap{
        flex: 1;
        background-color: #fff;
        position: relative;

        canvas {
            background-color: #fff; 
            cursor:url(https://5fou.com/i/2021/09/12/m2y5t7.ico),auto;

            // 橡皮擦
            // cursor: url(https://5fou.com/i/2021/09/12/n9fmty.ico),auto;
        }
    }

    .tools-wrap {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        height: 50px;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, .2);
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .color-wrap {
            display: flex;
            // width: 80%;

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

        .other-wrap {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            border-left: 1px dashed rgba(0, 0, 0, .2);
            // background-color: tomato;

            img {
                height: 80%;
                cursor: pointer;
                margin: 0 10px;
            }
        }

    }    
</style>