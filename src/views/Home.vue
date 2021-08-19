<template>
  <div class="home">
    <AppWrap />
    <TaskBar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskBar from '@/components/TaskBar'
import AppWrap from '@/components/AppWrap'

export default {
  name: 'Home',
  components: {
    TaskBar,
    AppWrap
  },
  data(){
    return {
    }
  }
}
</script>
<style lang="less">
  .home {
    width: 100%;
    height: calc(100vh - 50px);
    padding: 10px;
    box-sizing: border-box;
    display: flex;
  }
</style>
