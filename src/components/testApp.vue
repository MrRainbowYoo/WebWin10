<template>
    <WinAppWrap >
        <div class="test"></div>
    </WinAppWrap>
</template>

<script>
import WinAppWrap from './WinAppWrap'

export default {
    data(){
        return {}
    },
    methods:{
    },
    components:{ WinAppWrap },
    provide: {
        iconUrl: require('@/assets/记事本icon.png'),
        headerName: '测试',
        bgColor: 'gray'
    }
}
</script>

<style>
.test {
    background-color: royalblue;
    flex: 1;
}
</style>