<script setup>
import { BCard } from 'bootstrap-vue-next'
import { useCurrenciesStore } from '@/stores/currencies.js'
import { useTimerStore } from '@/stores/timer.js'
import CECurrencyListItem from '@/components/CECurrencyListItem.vue'

const currenciesStore = useCurrenciesStore()
const timerStore = useTimerStore()
</script>

<template>
  <b-card header="Currencies list">
    <CECurrencyListItem
      v-for="currencyName in Object.keys(currenciesStore.currencies)"
      :currency-name="currencyName"
      :currency-price="currenciesStore.currencies?.[currencyName]?.usd"
    />
    <template #footer>
      <span>
        Rates will update in
        <i>{{ timerStore.formattedTime }}</i>
      </span>
    </template>
  </b-card>
</template>
