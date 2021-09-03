<template>
  <ul>
    <li v-for="(item, index) in treeData" :key="index" :class="{'indented': !item.isParent}">
      <span class='item' @click="handleClick(item)">
        <div class="img-wrap" v-if="item.img">
          <img :src="item.img" v-if="!item.isExpand && !item.children">
          <img v-else :src="!item.isExpand && item.children ? item.img : openFile">
        </div>
        <span class="title" :title="item.text">{{item.text}}</span>
        <span class="icon">
            <span class="iconfont" 
            :class="{'icon-arrow-up-bold':item.isExpand,'icon-arrow-down-bold':!item.isExpand}"
            v-if="item.children && item.children.length"
            ></span>
        </span>          
      </span>
      <!-- 递归组件 -->
      <transition name="tree">
        <MyTree v-show="item.isExpand" v-if="item.children && item.children.length > 0" :treeData="item.children"></MyTree>
      </transition>
    </li>
  </ul>
</template>
<script>

export default {
  name: 'MyTree',
  data(){
    return {
      openFile:require('@/assets/文件夹1.png')
    }
  },
  props: {
    treeData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handleClick(item){
      if(item.children)
        item.isExpand = !item.isExpand
    }
  }
}
</script>
<style lang="less">
@listSize: 40px;
    ul {
        list-style: none;

        li {
          box-sizing: border-box;
          font-size: 12px;

          span.item {
            display: flex;
            align-items: center;
            padding: 5px;
            box-sizing: border-box;
            cursor: default;
            user-select: none;
            height: @listSize;

            span.title {
                          overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            }

            &:hover {
              background-color: rgb(81, 81, 81);
            }

            .img-wrap {
              min-width: @listSize*0.8;
              max-width: @listSize*0.8;
              height: @listSize*0.8;
              margin-right: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgb(0, 120, 215);

              img {
                width: 80%;
                height: 80%;
              }
            }           

            span.icon {
              margin-left: auto;
            }            
          }
        }
    }

    .indented {
      .img-wrap {
        margin-left: 10px;
      }
    }

  .tree-enter-active{
    transition: opacity .5s
  }
  .tree-enter, .tree-leave-active {
    opacity: 0;
  }      
</style>