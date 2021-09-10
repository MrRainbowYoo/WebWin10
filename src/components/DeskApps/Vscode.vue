<template>
    <WinAppWrap :newWidth="newWidth" :newHeight="newHeight">
        <div class="vscode">
            <iframe :src="url" frameborder="0"></iframe>
        </div>
    </WinAppWrap>
</template>

<script>
import WinAppWrap from '@/components/WinAppWrap'

export default {
    data(){
        return {
            url:'https://github1s.com',
            newWidth: '1000px',
            newHeight: '800px'
        }
    },
    components: { WinAppWrap },
    provide: {
        iconUrl: require("@/assets/vscode.png"),
        headerName: '',
        bgColor: 'rgb(60,60,60)',
        fontColor: 'rgb(181,181,181)'
    }
}
</script>

<style lang='less'>
    .vscode {
        width: 100%;
        flex: 1;
        background-color: rgb(30, 30, 30);

        iframe {
            width: 100%;
            height: 100%;
        }
    }
</style>