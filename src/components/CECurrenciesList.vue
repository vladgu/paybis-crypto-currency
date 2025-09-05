<script setup>
import { BCard } from 'bootstrap-vue-next'
import { useCurrenciesStore } from '@/stores/currencies.js'
import CECurrencyListItem from '@/components/CECurrencyListItem.vue'

const currenciesStore = useCurrenciesStore()
</script>

<template>
  <b-card header="Currencies list">
    <CECurrencyListItem
      v-for="currencyName in Object.keys(currenciesStore.currencies)"
      :currency-name="currencyName"
      :currency-price="currenciesStore.currencies?.[currencyName]?.usd"
    />
    <template #footer> Rates will update in {{}} </template>
  </b-card>
</template>
