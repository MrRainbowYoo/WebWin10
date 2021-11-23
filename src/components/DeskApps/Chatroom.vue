<template>
    <WinAppWrap :newWidth="newWidth" :newHeight="newHeight">
        <div class="chatroom-wrap">
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
            url: 'http://duoduozuikeail.top/chatroom'
        }
    },
    components: { WinAppWrap },
    provide: {
        iconUrl: require("@/assets/chatroom.png"),
        headerName: "聊天室",
    }
}
</script>

<style lang="less">
    .chatroom-wrap {
        flex: 1;
        background-color: #fff;
        iframe {
            width: 100%;
            height: 100%;
        }
    }
</style>