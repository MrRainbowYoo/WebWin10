<template>
    <WinAppWrap :newWidth="newWidth" :newHeight="newHeight">
        <div class="music-wrap">
            <iframe :src="url" frameborder="0"></iframe>
        </div>
    </WinAppWrap>
</template>

<script>
import WinAppWrap from '@/components/WinAppWrap'

export default {
    data(){
        return {
            newWidth: '1100px',
            newHeight: '800px',
            url: 'http://duoduozuikeail.top'
        }
    },
    components: { WinAppWrap },
    provide: {
        iconUrl: "",
        headerName: "",
        bgColor: '#ec4141'
    }
}
</script>

<style lang="less">
    .music-wrap {
        flex: 1;
        background-color: #fff;
        iframe {
            width: 100%;
            height: 100%;
        }
    }
</style>