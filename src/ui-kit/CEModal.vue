<script setup>
import { BModal } from 'bootstrap-vue-next'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
const close = () => emit('update:modelValue', false)
</script>

<template>
  <b-modal
    :visible="props.modelValue"
    :title="title"
    centered
    no-footer
    body-scrolling
    size="xl"
    @hide="close"
  >
    <slot />
  </b-modal>
</template>
