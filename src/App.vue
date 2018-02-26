<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/tab/tab'
import MHeader from 'components/m-header/m-header'
export default {
  components: {
    Tab,
    MHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/variable';

#app {
  color: $color-theme;
  font-size: 50px;
}
</style>
