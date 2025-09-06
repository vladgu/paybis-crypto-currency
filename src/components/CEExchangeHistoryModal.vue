<script setup>
import CEModal from '@/components/ui-kit/CEModal.vue'
import { formatDate } from '@/utils/formatDate.js'

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  exchangeHistory: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
const update = (val) => {
  emit('update:modelValue', val)
}
</script>

<template>
  <CEModal :model-value="modelValue" @update:model-value="update" title="Exchange history">
    <div v-for="{ timestamp, value } in exchangeHistory" :key="timestamp">
      <b>{{ formatDate(timestamp) }}:&nbsp;</b>
      <span>{{ value }}</span>
    </div>
  </CEModal>
</template>

<style scoped></style>
