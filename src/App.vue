<template>
  <div id="app">
    <icon-mdi:facebook />
    <icon-mdi:instagram />

    <mdi-alarm-off v-if="showIcon" />

    <s-icon icon="emojione:star" />
    <s-icon icon="ci:circle-chevron-left" />
  </div>
</template>

<script>
export default {
  components: {
    SIcon: () => import('./SIcon.vue'),
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
