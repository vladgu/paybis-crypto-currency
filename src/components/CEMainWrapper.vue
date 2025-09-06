<script setup>
import { onMounted, onUnmounted } from 'vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { useCurrenciesStore } from '@/stores/currencies.js'
import { useTimerStore } from '@/stores/timer.js'

const currenciesStore = useCurrenciesStore()
const timer = useTimerStore()

onMounted(() => {
  timer.start(currenciesStore.fetchCurrencies)
})

onUnmounted(() => {
  timer.stop()
})
</script>

<template>
  <b-container tag="main">
    <template v-if="currenciesStore.isError">
      <b-row class="my-md-4 my-2">
        <b-col class="text-center">
          Error occurred while fetching currencies:( Please try again later.
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-row class="my-md-4 my-2">
        <b-col md="6" class="mb-md-0 mb-2">
          <slot name="left-side"></slot>
        </b-col>
        <b-col md="6" class="mb-md-0 mb-2">
          <slot name="right-side"></slot>
        </b-col>
      </b-row>
    </template>
  </b-container>
</template>
