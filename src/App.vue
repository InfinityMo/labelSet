<template>
  <div>
    <div id="app"
         v-loading="$store.state.spinning"
         element-loading-text="加载中，请稍后..."
         element-loading-background="rgba(0, 0, 0, .6)">
      <router-view />

    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
  }
}
</script>
<style lang="less">
</style>
