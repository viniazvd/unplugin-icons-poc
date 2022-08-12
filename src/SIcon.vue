<template>
  <icon
    :icon="icon"
    :width="size"
    :height="size"

    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  name: 'SIcon',

  components: { Icon },

  props: {
    icon: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      default: 24
    }
  }
}
</script>
