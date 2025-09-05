<script setup>
import formatPrices from '@/utils/formatPrices.js'

defineProps({
  currencyName: {
    type: String,
    required: true,
  },
  currencyPrice: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-between">
    <span class="text-capitalize">{{ currencyName }}: </span>
    <span>
      <b>{{ formatPrices.format(currencyPrice) }}&nbsp;</b>
      USD
    </span>
  </div>
</template>
