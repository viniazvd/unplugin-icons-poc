<template>
  <div id="app">
    <i-mdi-dice-d12 />

    <i-mdi:instagram />

    <mdi-alarm-off v-if="showIcon" />
  </div>
</template>

<script>
export default {
  components: {
    MdiAlarmOff: () => import('virtual:icons/mdi/alarm-off')
  },

  data () {
    return {
      showIcon: false
    }
  },

  created () {
    setTimeout(() => {
      this.showIcon = true
    }, 2000);
  }
}
</script>
