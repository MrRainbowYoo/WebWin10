<template>
  <div class="home"  @click="hideBox">
    <AppWrap />
    <!-- <CellBox width=350 height=250></CellBox> -->
    <transition name="showBox">
      <component v-if="showBox === nowBox.name" :is="nowBox.name" :width="nowBox.width" :height="nowBox.height" :bottom="nowBox.bottom" :right="nowBox.right"></component>
    </transition>    
    <TaskBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskBar from '@/components/TaskBar'
import AppWrap from '@/components/AppWrap'
import CellBox from '@/components/CellBox'
import WifiBox from '@/components/WifiBox'
import VolumeBox from '@/components/VolumeBox'
import CalendarBox from '@/components/CalendarBox'
import NoticeBox from '@/components/NoticeBox'
import StartBox from '@/components/StartBox'

export default {
  name: 'Home',
  components: {
    TaskBar,
    AppWrap,
    CellBox,
    WifiBox,
    VolumeBox,
    CalendarBox,
    NoticeBox,
    StartBox
  },
  data(){
    return {
    }
  },
  methods:{
    hideBox(){
      this.$store.commit('changeShowBox',"")
    }
  },
  computed:{
    nowBox(){
      return this.$store.state.nowBox
    },
    showBox:{
      set(val){
        console.log(val)
      },
      get(){
        return this.$store.state.showBox
      }
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
    position: relative;
  }

  
  // .showBox-enter-active, .showBox-leave-active {
  //   // transition: opacity .5s
  // }
  // .showBox-enter, .showBox-leave-active {
  //   opacity: 0;
  //   // transform: translateY(100%);
  // }  
</style>
