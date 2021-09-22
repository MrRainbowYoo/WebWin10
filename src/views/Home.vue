<template>
  <div class="home"  @click="hideBox">
    <AppWrap />
    <!-- <Notebook /> -->
    <component :is="item.name" v-for="item in openApps" :key="item.id" :data-id="item.id"></component>
    <!-- <Browser /> -->
    <!-- <Draw /> -->
    <!-- <Music /> -->
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
import CellBox from '@/components/WinBoxes/CellBox'
import WifiBox from '@/components/WinBoxes/WifiBox'
import VolumeBox from '@/components/WinBoxes/VolumeBox'
import CalendarBox from '@/components/WinBoxes/CalendarBox'
import NoticeBox from '@/components/WinBoxes/NoticeBox'
import StartBox from '@/components/WinBoxes/StartBox'

import Notebook from '@/components/DeskApps/Notebook'
import Browser from '@/components/DeskApps/Browser'
import Vscode from '@/components/DeskApps/Vscode'
import Draw from '@/components/DeskApps/Draw'
import Music from '@/components/DeskApps/Music'

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
    StartBox,
    Notebook,
    Browser,
    Vscode,
    Draw,
    Music
  },
  data(){
    return {}
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
    },
    openApps(){
        return this.$store.state.openApps
    },
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
    overflow: hidden;
  }

  
  // .showBox-enter-active, .showBox-leave-active {
  //   // transition: opacity .5s
  // }
  // .showBox-enter, .showBox-leave-active {
  //   opacity: 0;
  //   // transform: translateY(100%);
  // }  
</style>
