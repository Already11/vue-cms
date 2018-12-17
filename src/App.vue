<template>
  <div class="tempBox">
    <mt-header fixed title="vue-cms项目"></mt-header>
    <mt-tabbar>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/timg.jpg">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/timg.jpg">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/timg.jpg">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/timg.jpg">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <h1>test</h1>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.tempBox {
  padding-top: 40px;
}
</style>

