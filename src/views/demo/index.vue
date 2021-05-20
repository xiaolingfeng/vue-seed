<template>
  <div>
    <div class="demo-draggable-item" v-draggable>
      DEMO draggable
    </div>
    <div class="demo-draggable-target" v-box>
      Drag to here
    </div>
    <div class="demo-draggable-target" v-box>
      Drag to here2
    </div>
    <div class="demo-draggable-target" v-box>
      Drag to here3
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.demo{
  &-draggable{
    color:#f00;
    &-item{
      height:50px;
      width:100px;
      border:1px solid #ccc;
    }
    &-target{
      height:100px;
      border:1px solid #ccc;
    }
  }
}
</style>
