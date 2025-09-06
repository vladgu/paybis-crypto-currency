<script setup>
import CEModal from '@/components/ui-kit/CEModal.vue'
import CECryptoChart from '@/components/CECryptoChart.vue'

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  currenciesList: {
    type: Array,
    required: true,
  },
  currenciesHistory: {
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
  <CEModal :model-value="modelValue" @update:model-value="update" title="Rates history">
    <CECryptoChart :points="currenciesHistory" :coins="currenciesList" />
  </CEModal>
</template>
